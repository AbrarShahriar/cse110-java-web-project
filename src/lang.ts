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
}

export const translations: ITranslations = {
  hero_title: { en: "Learn Java for CSE-110", bn: "" },
  hero_getMeThere: { en: "Get Me There...", bn: "" },
  roadmap_headerTitle: { en: "The Legendary Roadmap", bn: "" },
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
          en: `<h1 style="text-align: center; font-family: 'Block Berthold', sans-serif;">Writing Java Programs</h1>

        <div style="text-align: center;">
            <img src="https://i.postimg.cc/gjHn9jq7/59aabbf5-5787-4316-8c63-b9fe5c3dbb19.jpg
        " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
        </div> 
        
        <h1>
        
        Time to play with Java
        
        </h1>
        <div style="display: flex; align-items: center;">
            <div style="flex: 1;">
                <h2 style="font-family: 'Block Berthold', sans-serif; ">Let's Write our first ever Java program</h2>
                <p style="font-weight: 500;">This program will print out "Hello Classmates"
                </p>
                <p>Without thinking too much just memorize the highlighted portion. You will be able to understand by the end of this course.
                </p>
            </div>
           <pre><code class="language-Java"> 
    public class first_program {
      public static void main (String [] args){
        System.out.print("Hello Classmates");
      }
    }
         </code>
         </pre>
        </div>`,
          bn: "",
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
          @media only screen and (max-width: 600px) {
              .test {
                  flex-direction: column;
          }
      }
      </style>
<h1>What is a Visual Map/Flowchart 
      </h1>
      <div style="text-align: center;">
          <img src="https://i.postimg.cc/BQFXvvjP/flawchart.png

      " alt="Untitled Diagram" style="border-radius: 20px; border: 2px solid black; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); height:100px width:200px">
      </div>
      <h3> Here are some shapes of a flowchart on top </h3>
      <h3>A visual diagram showing how a program works, using shapes, symbols, and arrows to illustrate the order of events.</h3>
      <div class='test' >
          <div class="test2">
              <h1>Let's Examine A Flowchart</h1>
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
</div>`,
        },
      ],
      footnote: [],
    },
    {
      title: { en: "Exploring Variables And Data Types", bn: "" },
      coverImg: "",
      texts: [],
      topics: [],
      comingSoon: true,
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
