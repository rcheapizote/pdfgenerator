<?php

namespace App\Controller;

use Qipsius\TCPDFBundle\Controller\TCPDFController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\File\File as FileObject;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;




class DefaultController extends AbstractController
{


    protected $em;
    protected $repository;
    private $renderer;
    private $session;
    private $userLogged;
    private $role;
    private $plantSession;

    const IMAGES_PDF_PATH = "/report_pdf/";


    // Set up all necessary variable
    protected function initialise()
    {
        $this->session = new Session();
        $this->em = $this->getDoctrine()->getManager();
        $this->renderer = $this->get('templating');

    }

    public function indexAction(Request $request, TCPDFController $tcpdf){

        $html = $this->renderView('Admin/pdf.html.twig', array(
            //'p1' => 14, //percentage for stacked bar
            //'p2' => 86,
        ));

        $filename = md5(uniqid());
        $filneNL = $filename.".pdf";
        $attachmentPath = $this->returnPDFResponseFromHTML($html,$tcpdf,$filneNL);

       //return $this->render('Admin/pdf.html.twig', array());


    }


    /*
     *  returns file name and outputs the pdf file
     *  @param renderView $html the render view of the image and the pharagraph
     *  @param TCPDFController $tcpdf
     *  @param String $fileNL the file name
     */
    public function returnPDFResponseFromHTML($html, $tcpdf, $fileNL){

        //var_dump($fileNL);die;
        //set_time_limit(30); uncomment this line according to your needs
        // If you are not in a controller, retrieve of some way the service container and then retrieve it
        //$pdf = $this->container->get("white_october.tcpdf")->create('vertical', PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
        //if you are in a controlller use :
        // output the HTML content
        //$pdf->writeHTML($html, true, false, true, false, '');

        $pdf = $tcpdf->create('portrait', PDF_UNIT, 'A4', true, 'UTF-8', false);//A4 ES UN POCO MAS GRANDE CARTA
        //$pdf = $tcpdf->create('landscape', PDF_UNIT, 'LETTER', true, 'UTF-8', false);//TAMANO CARTA
        $pdf->SetAuthor('RenatoHC');
        $pdf->SetTitle(('pdfgenerator'));
        //$pdf->SetMargins(20,20,40, true);


        $pages = 1;

        while($pages <= 3){//iterate to output 3 pages


            // remove default header/footer
            $pdf->setPrintHeader(false);
            $pdf->setPrintFooter(false);

            $pdf->AddPage();
            $pdf->writeHTML($html, true, false, false, false, '');

            // set font
            $pdf->SetFont('helvetica', '', 18);


            $yOffset = 20;//1inch*2
            //CIRCLE GAUGE
            $style5 = array('width' => 4, 'cap' => 'butt', 'join' => 'round', 'dash' => 0, 'color' => array(188, 19, 119));

            $pdf->Text(26, 70+$yOffset, '100%');
            $pdf->SetLineStyle($style5);
            $pdf->Circle(35,75+$yOffset,15);//x,y,size //100%

            $pdf->Text(28, 110+$yOffset, '86%');
            $pdf->SetLineStyle($style5);
            $pdf->Circle(35, 115+$yOffset, 15, 160, 90); //86%


            //PIE CHART
            $xc = 35;//x
            $yc = 180+$yOffset;//y
            $r = 25;//size

            $pdf->SetFont('helvetica', '', 11);

            $style5 = array('width' => 0.50, 'cap' => 'butt', 'join' => 'round', 'dash' => 0, 'color' => array(255, 255, 255));
            $pdf->SetLineStyle($style5);

            $pdf->SetFillColor(19, 147, 19);//dark green//Humana discounts
            $pdf->PieSector($xc, $yc, $r, 0, 88, 'FD', false, 0, 2);

            $pdf->SetFillColor(188, 19, 119);//Your Share');//26%
            $pdf->PieSector($xc, $yc, $r, 88, 180, 'FD', false, 0, 2);

            $pdf->SetFillColor(142, 188, 19);//Amount Humana paid
            $pdf->PieSector($xc, $yc, $r, 180, 0, 'FD', false, 0, 2);


            $humanaOffset = $yOffset+5;

            $pdf->SetFont('helvetica', 'U', 11);
            $pdf->SetTextColor(0);
            $pdf->Text(65, 150+$humanaOffset, 'Average retail price');//24%


            $pdf->SetFont('helvetica', '', 11);
            $pdf->SetTextColor(19, 147, 19);
            $pdf->Text(65, 160+$humanaOffset, 'Humana discounts');//24%

            $pdf->SetTextColor(142, 188, 19);
            $pdf->Text(65, 170+$humanaOffset, 'Amount Humana paid');//50%

            $pdf->SetTextColor(0);
            $pdf->Text(65, 180+$humanaOffset, 'Medicare subsidy');

            $pdf->SetTextColor(188, 19, 119);
            $pdf->Text(65, 190+$humanaOffset, 'Your Share');//26%


            //STACKED BAR
            $xc=15;
            $yc=250;

            $pdf->SetFont('helvetica', '', 12);

            $pdf->SetLineStyle(array('width' => 5, 'cap' => 'butt', 'join' => 'miter', 'dash' => 0, 'color' => array(0, 0, 0)));

            $pdf->SetDrawColor(188, 19, 119);
            $pdf->Line($xc, $yc, $xc+14, $yc);
            $pdf->SetDrawColor(142, 188, 19);
            $pdf->Line($xc+14, $yc, $xc+86, $yc);
            //$pdf->Line($xc, $yc-50, $xc, $yc+50);


            $pdf->SetTextColor(0);
            $pdf->Text(10, 235, "MEDICAL HOSPITAL AND PART B PHARMACY ");
            $pdf->Text(10, 240, "COMBINED ANNUAL PLAN DEDUCTIBLE");

            $pdf->Text(15, 255, "0");
            $pdf->Text(87, 255, "$1500");


            $pdf->SetTextColor(0);
            $pdf->Text(10, 260, "Your combined Annual  Plan Deductible  is");
            $pdf->SetTextColor(142, 188, 19);
            $pdf->Text(92, 260, "$1500");
            $pdf->SetTextColor(0);
            $pdf->Text(10, 265, "You have paid");
            $pdf->SetTextColor(188, 19, 119);
            $pdf->Text(40, 265, "$209.99");
            $pdf->SetTextColor(0);
            $pdf->Text(57, 265, "towards your deductible");

            $pages++;

        }


        $pdf->Output($fileNL.".pdf",'I'); // This will output the PDF as a response directly
        //die;
        //$pdf->Output($filename.".pdf",'D');//D FOR DOWNLOAD

        //$pdf->Output($fileNL, 'F');//this can be used to SAVE FILE TO DISK
        //we can specify a custom folder to save the pdf

        return $fileNL;

    }






}