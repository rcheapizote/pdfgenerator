#racami pdfgenerator

Temporary uploaded to https://testing.mayawork.com

You can download the source code by cloning it from GitHub
https://github.com/rcheapizote/pdfgenerator.git

Notes: I ended up using some tools I already manage, because of the short-time to deliver this task

It's based on a web based skeleton of symfony framework 4.4.9 but now I usually develop with the 5.1 version
Using TCPF to handle the PDF render
//It would be better to use a library to generate the charts and the render it to the PDF file 

//Batch (not complete for this version)
About the batch file, being a project mounted in symfony it could be possible to create a console command to execute the output to a folder on the server
Running like "php bin/console app:create-pdf outputfolder/directory"
Or writing this commands on a bash file to execute them
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
class GreetCommand extends Command
{
    // ...

    protected function configure()
    {
        $this
            // ...
            ->addArgument('output_folder', InputArgument::REQUIRED, '')
            
        ;
    }
}
//Batch end

:::SOURCE CODE :::
You can check the main controller under /src/Controller/DefaultController
I used one template to render the image and the pharagraph text /templates 
