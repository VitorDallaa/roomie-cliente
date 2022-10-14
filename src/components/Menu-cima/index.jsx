import React from "react";
//import Input from "../Input-form";
import "./style.css";


export function Menucima() {
   return(
/* 
    <body>
        <header>
          <nav>
            <div className="form-image">
            <img src="./logo.svg" alt="Logo da Roomie" />
           </div>


           <ul class="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Busque Aqui</a></li>
            <li><a href="/">Anuncie Aqui</a></li>
            <li><a href="/">Sobre nós</a></li>
            
           </ul>





           </nav>
        



        </header>
        <main></main>
         
          




    </body>
       
*/
<body>
   {/*  <nav>

        <div class="logo">
        <img  src="./logo.svg" alt="Roomie" />
        </div>

        <div class="barra"> 
        <ul>
            <li> <a href="#" class="active"> Home </a> </li>
            <li> <a href="#"> Busque Aqui</a> </li>
            <li> <a href="#"> Anuncie Aqui</a> </li>
            <li> <a href="#"> Sobre nós</a> </li>
        </ul>
        </div>
        

    </nav> */}
    <nav>
		<label for="check" class="checkbtn">
			<i class="fas fa-bars"></i>
		</label>

		{/* <label class="logo">Minha Logo</label>
        <img  src="./logo.svg" alt="Roomie" /> */}
		<ul>
              {/*   <a href="#" class="nav-logo">
                <img  src="./logo.svg"  alt="Roomie" />
                </a> */}
        <li> <a href="#" class="active"> Home </a> </li>
            <li> <a href="#"> Busque Aqui</a> </li>
            <li> <a href="#"> Anuncie Aqui</a> </li>
            <li> <a href="#"> Sobre </a> </li>
		</ul>

	</nav>

    <script src="main.js"></script>
</body>
   





    
   );
}