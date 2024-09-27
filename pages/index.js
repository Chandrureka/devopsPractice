import   Button  from '../components/Buttonn'


function home(){
    return(
        <div>
           <div className="flex justify-between items-center p-10">
 
            <div className="text-xl font-bold">
             <span>Pals</span>
             <span className="text-blue-600">Creww</span>
            </div>

 
            <div class="flex space-x-10">
              <a href="#about" >About</a>
              <a href="#contact">Contact</a>
              <a href="#support">Support</a>
              <Button  />
             
            </div>
       </div>
    


        </div>
          
    );
}
export default home;                