type TLang = {
  en: string;
  bn: string;
};

interface IRoadmapData {
  coverImg: string;
  title: TLang;
  topics: string[];
  texts: TLang[];
  comingSoon: boolean;
  footnote: (TLang & { url: string })[];
}

interface ITranslations {
  hero_title: TLang;
  hero_getMeThere: TLang;
  roadmap_headerTitle: TLang;
  roadmapData: IRoadmapData[];
  aboutUsTitle: TLang;
}

export const translations: ITranslations = {
  hero_title: { en: "Learn Java for CSE-110", bn: "" },
  hero_getMeThere: { en: "Get Me There...", bn: "" },
  roadmap_headerTitle: { en: "The Legendary Roadmap", bn: "" },
  aboutUsTitle: { en: "About Us", bn: "" },
  roadmapData: [
    {
      comingSoon: false,
      coverImg:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: {
        en: "Introduction To Logical Programming & Flow Management",
        bn: "",
      },
      topics: ["Program", "Logic", "Flow Control", "Flow Chart"],
      texts: [
        {
          en: `
        The fundamental building block of software development is a computer program,  enabling computers to perform a variety of tasks to provide valuable functionality to users.Put differently, we utilize programs as a means to interact with computers, furnishing them with precise instructions.`,
          bn: "",
        },
        {
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Logic of Programming</h1>

        <div style="text-align: center;">
            <img src="https://i.postimg.cc/VktkmPdB/Untitled-Diagram-drawio.png
        " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
        </div>
        
        <h3>
        <ul>
        <li>Methodical approach to logical thinking and devising resolutions for particular issues.</li>
        <li>Breaking down complexities into bite-sized components and crafting systematic solutions.</li>
        </ul>
        
        Example : You wanna take two numbers as input from user and show 
        their product as output. What would be the steps ?</h3>`,

          bn: "",
        },
        {
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Controlling Program Flow

        </h1>
        
        <h3> Program flow control determines how instructions are carried out in a program, depending on conditions or control structures.</h3>
        
        
        
        <h3> 
        <ul>
        <li>Sometimes, the flow follows a step-by-step sequence.</li>
        <li>But usually, it doesn't stick to a strict sequence.</li>
        <li>The flow might circle back to a previous part of the program.</li>
        <li>It's also possible to skip or halt certain parts based on conditions.</li>
        </ul>
        </h3>
        
        <h3> Example :
         Imagine you're driving to work. Your route may vary based on traffic conditions or road closures. If there's heavy traffic on your usual route, you might take an alternative road to reach your destination faster. This decision-making process based on current conditions is similar to program flow control in coding.
         </h3>`,
          bn: "",
        },
        {
          en: `
          <h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">What is a Visual Map/Flowchart
          
          </h1>
          <div style="text-align: center;">
              <img src="https://i.postimg.cc/BQFXvvjP/flawchart.png
          " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
          </div>
          
          <h3> Here are some shapes of a flowchart on top </h3>
          
          <h3>A visual diagram showing how a program works, using shapes, symbols, and arrows to illustrate the order of events.</h3>
          
          <style>
          
          @media only screen and (max-width: 600px) {
            .test {
              flex-direction: column;
            }
          }
          </style>
          <div class='test' style="display: flex; align-items: center; justify-content: center">
              <div style="flex: 1; margin-right: auto;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Let's Examine A Flowchart</h1>
                  <p>Let’s go back to the previously discussed scenario and try to visualize it using a flowchart.</p>
                  <p>Example: Try to think of a program that takes two numbers from the user then calculates and shows their product in the output. Represent this program using a flowchart.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/HsmfJpzP/flaw-product-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          <p>&nbsp;</p>
          
          
          <div class='test' style="display: flex; align-items: center;">
              <div style="flex: 1;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Continued Scenario to flowchart 1</h1>
                  <p>Assignment #1:</p>
                  <p>Task: Imagine a program that figures out and displays the area of a rectangle after getting the measurements of its two sides as input. Create a visual chart illustrating how this program works.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/sgQ9SvG5/area-Flowchart-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          
          <p>&nbsp;</p>
          
          
          <div class='test' style="display: flex; align-items: center;">
              <div style="flex: 1;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Continued Scenario to flowchart 2</h1>
                  <p>Assignment #2:</p>
                  <p>Task: Imagine a program that computes and displays the speed of a car in meters per second after receiving the speed in kilometers per hour from the user as input. Create a visual chart illustrating how this program operates.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/tJPdFZdZ/carspeed-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          
          <p>&nbsp;</p>
          
          
          <div class='test' style="display: flex; align-items: center;">
              <div style="flex: 1;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Continued Scenario to flowchart 3</h1>
                  <p>Assignment #3:</p>
                  <p>Task: Picture a scenario where a rectangle can perfectly enclose two circles, each with a radius of R, with each circle touching three different sides of the rectangle. Given the radius value as input, calculate and display the area inside the rectangle that is not occupied by the circles. Create a visual chart illustrating the steps of this program.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/dtYrz0m6/circle-Square-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          
          <p>&nbsp;</p>
          
          
          <div class='test' style="display: flex; align-items: center;">
              <div style="flex: 1;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Continued Scenario to flowchart 4</h1>
                  <p>In the earlier slides, we looked at a sequential program flow example. But in many cases, program flows aren't sequential. In those instances, we use a diamond shape to determine where the program flow will go next.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/X7vtRct3/diamond-Description-And-Shape-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          
          <p>&nbsp;</p>
          
          
          <div class='test' style="display: flex; align-items: center;">
              <div style="flex: 1;">
                  <h1 style="font-family: 'Block Berthold', sans-serif;">Continued Scenario to flowchart 5</h1>
                  <p>
          Let's explore a non-sequential program flow example.
          Scenario: Imagine a program that receives two numbers from the user and displays the larger number as output. Create a visual chart illustrating how this program operates.</p>
              </div>
              <div style="flex: 1;">
                  <img src="https://i.postimg.cc/MZ4rR1wT/largest-Number-drawio.png
          " style="border-radius: 10px;">
              </div>
          </div>
          
          `,
          bn: "",
        },
      ],

      footnote: [
        {
          en: "Wikipedia",
          bn: "",
          url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        },
        {
          en: "W3School",
          bn: "",
          url: "https://www.w3schools.com/java/",
        },
      ],
    },
    {
      comingSoon: false,
      coverImg: "",
      title: { en: "Intro To Java Lang", bn: "" },
      topics: [
        "Why Java",
        "Cross-Platform Java",
        " Installing Stuffs",
        "Writing Programs",
      ],
      texts: [
        {
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Why Should We Learn Java</h1>

      <div style="text-align: center;">
          <img src="https://i.postimg.cc/2SVfwJqW/OIG3.jpg
      " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
      </div>
      
      
      
      <h3>Here are some reasons to learn Java : </h3>
      
      <ul>
        <li>
        Operates on over 5.5 billion devices. Java is flexible and can be used for Web Development, Mobile Apps (Android), Desktop Applications, IoT Devices, and more.
        </li>
        <li>
       Java's implementation of Object-Oriented Programming is widely considered strong and efficient.
        </li>
        <li>
        Enterprise and Large-Scale Systems. Java is relied upon for its stability, scalability, and security in crucial projects.
        </li>
        <li>
        Java's design for portability lets developers write code once and run it on various operating systems with a Java Virtual Machine (JVM) present.
        </li>
      </ul>`,
          bn: "",
        },
        {
          bn: "",
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Cross-Platform Compatibility - A Major 	Feature of Java</h1>

        <div style="text-align: center;">
            <img src="https://i.postimg.cc/VL2n202J/0af0e93b-01aa-4383-83a2-0208727a1841.jpg
        " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
        </div>
        
        
        
        <h2>To grasp how Java achieves portability across different systems, let's explore three key components involved in Java code execution :
        </h2>
        
        <ul>
          <li>
        The JVM (Java Virtual Machine) acts as a translator for bytecode. It interprets the bytecode instructions written for a universal format and executes them on the specific system's hardware. Different operating systems (like Mac, Linux, and Windows) require a compatible JVM to understand and run Java bytecode.
          </li>
          <li>
         Java provides a runtime environment (called JRE) with the necessary libraries and tools (including a Java Virtual Machine) to execute Java programs. This environment ensures consistency across different systems.
        
          </li>
          <li>
         The Java Development Kit, often shortened to JDK, provides a comprehensive set of tools for programmers building Java applications. This toolkit includes essentials like a compiler (often called javac) for converting human-readable code into a format computers understand, and a debugger (like jdb) to help identify and fix errors in the code.  The JDK is essential for the development process, while a separate runtime environment is needed to actually run the finished Java programs. This runtime environment typically comes bundled with the JDK for development convenience.
          </li>
        
        </ul>
        
        
        <h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">The Journey of Java Code: Compilation to Platform Independence</h1>
        
        <div style="text-align: center;">
            <img src="https://i.postimg.cc/qRJftM38/d6031647-16d3-4ea0-ac5c-868a3adf7564.jpg
        " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
        </div>
        
        
        
        <h2>To grasp how Java achieves portability across different systems, let's explore three key components involved in Java code execution :
        </h2>
        
        <ul>
          <li>
        The JVM (Java Virtual Machine) acts as a translator for bytecode. It interprets the bytecode instructions written for a universal format and executes them on the specific system's hardware. Different operating systems (like Mac, Linux, and Windows) require a compatible JVM to understand and run Java bytecode.
          </li>
          <li>
         Java provides a runtime environment (called JRE) with the necessary libraries and tools (including a Java Virtual Machine) to execute Java programs. This environment ensures consistency across different systems.
        
          </li>
          <li>
         The Java Development Kit, often shortened to JDK, provides a comprehensive set of tools for programmers building Java applications. This toolkit includes essentials like a compiler (often called javac) for converting human-readable code into a format computers understand, and a debugger (like jdb) to help identify and fix errors in the code.  The JDK is essential for the development process, while a separate runtime environment is needed to actually run the finished Java programs. This runtime environment typically comes bundled with the JDK for development convenience.
          </li>
        
        </ul>`,
        },
        {
          bn: "",
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Installing DrJava & JDK</h1>

          <div style="text-align: center;">
              <img src="https://i.postimg.cc/W4VFPBjZ/97eec109-6448-44ca-92a5-f4bc94dad8cc.jpg
          " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
          </div> 
          
          <h2>For this course we’ll be using version 8 of JDK and DrJava as IDE</h2>
          
          <ol>
            <li> 
             Link to JRE for Windows x64: <a target="_blank" href="https://javadl.oracle.com/webapps/download/AutoDL?BundleId=249851_43d62d619be4e416215729597d70b8ac
          ">JRE 8</a>
            </li>
           
            <li>
              Link to DrJava: <a target="_blank" href="https://drive.google.com/file/d/1bNB0VWxQPOJ1SFmA9nFwHt_TRhm3JvVu/view
          ">DrJava</a>
            </li>
          </ol>`,
        },
        {
          en: `<div>
          <style>
       h1 {
           text-align: center;
           font-family:'Block Berthold',sans-serif;
       }
 .test {
         display: flex; 
         align-items: center; 
         justify-content: center;
       }
       .test2 {
           flex: 1; margin-right: auto;
       }
       .flex_one{
         flex: 1;
       }
           @media only screen and (max-width: 600px) {
               .test {
                   flex-direction: column;
           }
       }
 </style>
 <h1>   Writing Java Programs
           </h1>
           <div style="text-align: center;">
               <img src="https://i.postimg.cc/gjHn9jq7/59aabbf5-5787-4316-8c63-b9fe5c3dbb19.jpg
 
           " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test' >
               <div class="test2">
                   <h1>Let's Write our first ever Java program</h1>
                    <div class="flex_one">
         <p>This program will print out "Hello Classmates"
         </p>
         <br>
         <p>Without thinking too much just memorize the highlighted portion. You will be able to understand by the end of this course.
         </p>
         <br>
         <p>Keep in mind, you Class name has to be the same as the file name.
 In this example, first_program is our class name.
         </p>
     </div>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
    public class first_program {
 
         public static void main (String [] args){
             System.out.print(“Hello Classmates);
         }
     }
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Let's Discuss Printing in Java</h1>
                  <p>Java uses three different approaches to show the output in the console.
         </p>
               </div>
               <div class="flex_one">
                   <img src="https://i.postimg.cc/RFvRsmmF/Print-Java-drawio.png
 
           " style="border-radius: 10px;">
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Here are some examples:</h1>
               </div>
               <div class="flex_one">
                     <pre><code class="language-Java"> 
  public class print_examples{   
      public static void main(String[] args)  { 
        float x = 1.65f;
        System.out.println("Hello ClassMate s"); 
        System.out.print("number: " +  32);
        System.out.printf("formatted x = %.4f\n", y);
        }   
 }
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Java Comments</h1>
                  <ul>
                  <li>Comments help make the code easier to read and understand.</li>
                  <li>The Java compiler ignores the commented sections of code.</li>
                  <li>Single-line comments: Begin with two forward slashes (//).</li>
                  <li>Multi-line comments: Start with /* and end with */.</li>
                  </ul>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 public class Comments {   
     public static void main(String[] args)  { 
         // This is a single-line comment example
         System.out.println("Comments in Java");
         /* 
             This is a multi-line comment example
         */
         System.out.println("Program ends!");
     }   
 }
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1 style="font-family: 'Block Berthold', sans-serif;">Keywords in Java</h1>
                   <p>Java Keywords are special reserved words with predefined meanings that cannot be used as variable names. Let's learn about a few of them.</p>
                   <ol>
                   <li><strong>Public:</strong> This is an access modifier keyword. It indicates that the class or method is accessible from any other classes. Private and Protected are other types of access modifiers.</li>
                   <li><strong>Class:</strong> This keyword is used to specify the class name. In our example, class FirstProgram means that FirstProgram is the name of the class. </li>
                   <li><strong>Void:</strong> This keyword indicates that nothing will be returned from the method. We'll cover this in more detail in later lectures. </li>
                   <li> <strong>Static:</strong> This keyword signifies that the method can be called without creating an instance of the class. We'll delve into this further in the upcoming lectures, and it'll become clearer then.</li>
                   </ol>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 public class first_program   {
   public static void main (String[] args){
     System.out.print(“Hello ClassMates"); 
   }
 }
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1>Scopes in Java</h1>
                   <p>
           In Java, scopes determine the visibility and lifespan of variables, methods, and classes. These scopes are primarily delineated using { } (Curly Braces).</p>
           <br>
                   <p>As illustrated in the example, after declaring the class name "FirstProgram" in line 1, "{" was used. This indicated that everything below was within the Class Scope until the bracket was closed in line 5 using "}".
         </p>
               </div>
               <div class="flex_one">
                   <pre><code class="language-Java"> 
 public class first_program {
   public static void main (String[] args) {
     System.out.print(“Hello ClassMates");
   }
 }
 
 
  </code>
  </pre>
               </div>
           </div>
 </div>`,
          bn: "",
        },
      ],
      footnote: [],
    },
    {
      title: { en: "Exploring Variables And Data Types", bn: "" },
      coverImg: "",
      texts: [
        {
          bn: "",
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Identifiers
      </h1>
      
      <div style="text-align: center;">
          <img src="https://i.postimg.cc/zGSt8mk6/4-drawio.png
      " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
      </div>
      
      
      <ul>
          <li>A name given to a specific entity in a program.</li>
          <li>It can be a variable name, method name, class name, structure name, etc.</li>
      </ul>`,
        },
        {
          bn: "",
          en: `<div>
          <style>
       h1 {
           text-align: center;
           font-family:'Block Berthold',sans-serif;
       }
 .test {
         display: flex; 
         align-items: center; 
         justify-content: center;
       }
       .test2 {
           flex: 1; margin-right: auto;
       }
       .flex_one{
         flex: 1;
       } 
           @media only screen and (max-width: 600px) {
               .test {
                   flex-direction: column;
           }
       }
 </style>
 <h1>   Variables in Programming
           </h1>
           <div style="text-align: center;">
               <img src="https://i.postimg.cc/zB5q31mh/196232fe-f00d-4314-afd6-0a33137bc38d.jpg
 
           " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test' >
               <div class="test2">
                   <h1>Here Are Some Points to Identify Variables</h1>
                    <div class="flex_one">
      <ul>
                  <li>A variable is a container used to store data.</li>
                  <li>A type of identifier.</li>
                  <li>Each variable has a specific data type.</li>
                  </ul>
     </div>
               </div>
               <div class="flex_one">
                   <div style="flex: 1;">
         <img src="https://i.postimg.cc/vBWDSzyr/var1-drawio.png
 " style="border-radius: 10px;">
     </div>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Variables Continued</h1>
                  <p><strong>Declaration:</strong> Allocating memory space and specifying the datatype of a variable.</p>
                  <p><strong>Assignment:</strong> Giving a value to a variable.</p>
                  <p><strong>Initialization:</strong> Allocating memory space, specifying the data type, and assigning a value.</p>
               </div>
               <div class="flex_one">
                   <pre><code class="language-Java"> 
 int a;  	//declaration
 a= 5;   	//assignment
 int a = 5; //initialization
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Variables Initialization</h1>
                   <p><strong>Here is the syntax:</strong> 
                   < datatype >  < variable_name > = < value > < format_specifiers >
 </p>
   <p>
   [Format specifiers for double and float data types only]
 
   </p>
               </div>
               <div class="flex_one">
                     <pre><code class="language-Java"> 
   int  number = 12;
   char var = ‘A’;
   double value = 5.45d;
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Naming Conventions of Variables</h1>
                  <ul>
                  <li>Must start with letters (A-Z, a-z), dollar sign ($), or underscore (_).   
      </li>
                  <li>It can not start with numbers or special characters.</li>
                  <li>Can contain numbers except at the beginning (0-9).
         <strong>Example:</strong> int num1 = 10;</li>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 int number = 60;
 int num1 = 20;
 /* 
 
 variable declaration below are wrong
  (don't try it at home)
 
  */
 
 int %name = 23; 
 int 2name = 33;
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1 style="font-family: 'Block Berthold', sans-serif;">Variable Naming Conventions Continued</h1>
                   <p>Java Keywords are special reserved words with predefined meanings that cannot be used as variable names. Let's learn about a few of them.</p>
                   <ul>
                   <li>
 <strong>Case-sensitive:</strong>
 Num1 and num1 are not the same.</li>
                   <li>Cannot contain white spaces. </li>
                   <li>You can use camel casing (studentName) or snake casing (student_id) for multiple words in a variable.</li>
                   </ul>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 int number_given = 45; //correct
 int numberGiven = 46; //correct
 int number given = 47 // incorrect
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1>Variable Naming Conventions Continued Part 2</h1>
                    <ul>
                   <li>
                     It should be meaningful</li>
                   <li>You should always avoid single single character variable names.</li>
                   <li>Variable names must not include a Java reserved keyword.</li>
                   <li>Keywords generally start with lowercase letters.</li>
                   </ul>
               </div>
               <div class="flex_one"> 
                   <pre><code class="language-Java"> 
 List of reserved keywords in java

 
|------------|-----------|--------------|------------|-----------|
| abstract   | assert    | boolean      | break      | byte      |
| case       | catch     | char         | class      | const*    |
| continue   | default   | do           | double     | else      |
| enum       | extends   | final        | finally    | float     |
| for        | goto*     | if           | implements | import    |
| instanceof | int       | interface    | long       | native    |
| new        | null      | package      | private    | protected |
| public     | return    | short        | static     | strictfp  |
| super      | switch    | synchronized | this       | throw     |
| throws     | transient | try          | void       | volatile  |
| while      |           |              |            |           |

  </code>
  </pre>
               </div>
           </div>
 </div>`,
        },
        {
          bn: "",
          en: `<div>
          <style>
       h1 {
           text-align: center;
           font-family:'Block Berthold',sans-serif;
       }
 .test {
         display: flex; 
         align-items: center; 
         justify-content: center;
       }
       .test2 {
           flex: 1; margin-right: auto;
       }
       .flex_one{
         flex: 1;
       } 
           @media only screen and (max-width: 600px) {
               .test {
                   flex-direction: column;
           }
       }
 </style>
 <h1>   Data types in Programming
           </h1>
           <div style="text-align: center;">
               <img src="https://i.postimg.cc/PqJtCjFC/99564f6d-1681-470f-b57a-7f29441efc54.jpg
 
           " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test' >
               <div class="test2">
                   <h1>Here Are Some Information Regarding Data Types</h1>
                    <div class="flex_one">
                   <h3>In Java, variables require a data type to be assigned.There are major two types of data in Java:</h3>
      <ol>
                  <li><strong>Primitive Data Types:</strong> Hold a value and specify the size and type of a variable.</li>
                  <li><strong>Non-Primitive Data Types:</strong> Hold a reference to an object or location.</li>
                  </ol>
     </div>
               </div>
               <div class="flex_one">
                   <div style="flex: 1;">
         <img src="https://i.postimg.cc/7Z6mmDhN/datatype-drawio.png
 " style="border-radius: 10px;">
     </div>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Here are some more examples:</h1>
               </div>
               <div class="flex_one">
             <img src="https://i.postimg.cc/yxNWZf6v/types-Data-drawio.png
 " style="border-radius: 10px;">
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Continued Example of primitive data types:</h1>
                   <p>More example of <strong>primitive data types:</strong> </p>
               </div>
               <div class="flex_one">
                     <pre><code class="language-Java"> 
 short short1 = 3000;
 long var = 2351678;
 byte value = 20;
 int a = 10;
 float b = 1.56f;                // f specifies float value
 double d1 = 12.6543d;   // d specifies double value
 char ch = ‘a’;                  // Enclosed by single quotation
 boolean answer = true;
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Some example of non-primitive data types</h1>
                  <ul>
                  <li><strong>String</strong> A collection of characters enclosed in quotation marks. 
      </li>
                 <li><strong>Arrays</strong>A collection of a fixed number of values of the same data type.
      </li>
                  <li><strong>Class:</strong> A blueprint for creating objects.
      </li>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
        String mine_string = “Hello Classmates”;
        int [ ] array1 = {1, 2, -11, 6};
 
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1 style="font-family: 'Block Berthold', sans-serif;">Watch Out !!!</h1>
                   <ul>
                   <li>
 Values of the char data type are enclosed in single quotation marks (' ').</li>
                   <li>But values of the String data type are enclosed in double quotation marks (" ").</li>
                   </ul>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 char ch = ‘a’;                     // Enclosed by single quotation
 String my_string = “Hello World”;  // Enclosed by double quotation
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
          
 </div>`,
        },
        {
          bn: "",
          en: `<div>
          <style>
       h1 {
           text-align: center;
           font-family:'Block Berthold',sans-serif;
       }
 .test {
         display: flex; 
         align-items: center; 
         justify-content: center;
       }
       .test2 {
           flex: 1; margin-right: auto;
       }
       .flex_one{
         flex: 1;
       } 
           @media only screen and (max-width: 600px) {
               .test {
                   flex-direction: column;
           }
       }
 </style>
 <h1>   Type Casting / Datatype Conversion
           </h1>
           <div style="text-align: center;">
               <img src="https://i.postimg.cc/bvGr56FM/type-Casting-drawio.png
 
           " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
           </div>
           <h3>
           <ul>
           <li>Casting is the process of changing an entity's data type to another. Type casting involves converting a value from one data type to another.</li>
           <li>Casting only changes the data type, not the data itself.</li>
           <li>There Are two types of casting
                   <ul>
                     <li>Implicit Casting\Widening
                     </li>
                     <li>Explicit Casting\Narrowing
                     </li>
                   </ul>
                   </li>
                   </ul>
           </ul>
           
 </h3>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test' >
               <div class="test2">
                   <h1>Implicit Casting / Widening</h1>
                    <div class="flex_one">
                   <h3>In Java, variables require a data type to be assigned.There are major two types of data in Java:</h3>
      <ul>
                  <li>Casting only changes the data type, not the data itself.</li>
                  <li>No data is lost.</li>
                  <li>Java performs this casting automatically, without needing explicit code.</li>
                  </ul>
     </div>
               </div>
               <div class="flex_one">
                   <div style="flex: 1;">
           <pre><code class="language-Java"> 
 int number = 20;
 double data = number;
 
  </code>
  </pre>
     </div>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Explicit Casting/Narrowing</h1>
                   <ul>
                   <li>Converting higher data types to lower data types.</li>
                   <li>When larger-size data types are converted into smaller ones, data loss may occur. </li>
                   </ul>
               </div>
               <div class="flex_one">
              <pre><code class="language-Java"> 
 double num = 20.89;
 int data = (int)num;
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Continued Example of primitive data types:</h1>
                   <p>More example of <strong>primitive data types:</strong> </p>
               </div>
               <div class="flex_one">
                     <pre><code class="language-Java"> 
 short short1 = 3000;
 long var = 2351678;
 byte value = 20;
 int a = 10;
 float b = 1.56f;                // f specifies float value
 double d1 = 12.6543d;   // d specifies double value
 char ch = ‘a’;                  // Enclosed by single quotation
 boolean answer = true;
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Some example of non-primitive data types</h1>
                  <ul>
                  <li><strong>String</strong> A collection of characters enclosed in quotation marks. 
      </li>
                 <li><strong>Arrays</strong>A collection of a fixed number of values of the same data type.
      </li>
                  <li><strong>Class:</strong> A blueprint for creating objects.
      </li>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
        String mine_string = “Hello Classmates”;
        int [ ] array1 = {1, 2, -11, 6};
 
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div style="flex: 1;">
                   <h1 style="font-family: 'Block Berthold', sans-serif;">Watch Out !!!</h1>
                   <ul>
                   <li>
 Values of the char data type are enclosed in single quotation marks (' ').</li>
                   <li>But values of the String data type are enclosed in double quotation marks (" ").</li>
                   </ul>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 char ch = ‘a’;                     // Enclosed by single quotation
 String my_string = “Hello World”;  // Enclosed by double quotation
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
          
 </div>`,
        },
        {
          bn: "",
          en: `<div>
          <style>
       h1 {
           text-align: center;
           font-family:'Block Berthold',sans-serif;
       }
 .test {
         display: flex; 
         align-items: center; 
         justify-content: center;
       }
       .test2 {
           flex: 1; margin-right: auto;
       }
       .flex_one{
         flex: 1;
       } 
           @media only screen and (max-width: 600px) {
               .test {
                   flex-direction: column;
           }
       }
 </style>
 <h1>   Numeric to Numeric Conversion
           </h1>
           <div style="text-align: center;">
               <img src="https://i.postimg.cc/JzZZ1b6h/8083fb51-cd19-4fdd-a024-c8e8c158d4c5.jpg
 
           " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test' >
               <div class="test2">
                   <h1>Int to float / Double :</h1>
                    <div class="flex_one">
                  </ul>
     </div>
               </div>
               <div class="flex_one">
                   <div style="flex: 1;">
           <pre><code class="language-Java"> 
 int num = 20;
 double data2 = num; //20.0
 float data3= num; //20.0
 
 
  </code>
  </pre>
     </div>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Double and float to int :</h1>
               </div>
               <div class="flex_one">
              <pre><code class="language-Java"> 
                  
 double num2 = 10.99d;
 float num3 = 10.25f;
 int data2 = (int)num2; //10
 int data3= (int)num3 //10
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Numeric to Non-Numeric Conversion (integer to String)</h1>
               </div>
               <div class="flex_one">
                     <pre><code class="language-Java"> 
 String x = String.valueOf(15);
 String y = Integer.toString(20);
 System.out.println(x + y); //1520
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Numeric to Non-Numeric Conversion (String to integer)</h1>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 int n = Integer.parseInt("25");
 int m = Integer.valueOf("35");
 System.out.println(m + n); //60
 
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Numeric to Non-Numeric Conversion (integer to char)</h1>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 int a = 65;    
 char c = (char) a;    
 System.out.println(c);  // Output: A
 
 
 
  </code>
  </pre>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <div class='test'>
               <div class="flex_one">
                   <h1>Numeric to Non-Numeric Conversion (char to integer)</h1>
               </div>
               <div class="flex_one">
                    <pre><code class="language-Java"> 
 char a = 'Z';    
 int c = (int) a;    
 System.out.println(c);  // Output: 90
 
 
 
 
  </code>
  </pre>
  <h2><a href="https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
 
 ">ASCII Table</a>
 </h2>
               </div>
           </div>
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <p>&nbsp;</p>`,
        },
      ],
      topics: [
        "Identifiers",
        "Variables",
        "Data types",
        "Datatype Conversion",
        "Conversion",
      ],
      comingSoon: false,
      footnote: [],
    },
    {
      title: { en: "Exploring Mathematical Operators", bn: "" },
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Java Input From Users", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Let’s Understand Errors In Java", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Decision Making Using Java", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "While Loops", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "For Loops", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Loops That Are Nested", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Break/Continue Loops", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Strings In Java", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Arrays In Java", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Sorting In Java", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Java Methods", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Recursion", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Playing With File I/O", bn: "" },
    },
    {
      coverImg: "",
      topics: [],
      comingSoon: true,
      footnote: [],
      texts: [],
      title: { en: "Tracing", bn: "" },
    },
  ],
};
