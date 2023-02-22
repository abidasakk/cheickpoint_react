import logo from './logo.svg';
import './App.css';
import './style.css'
function App() {
  return (
<div className="App">


<div class='corps'> 
<form class="row g-3 formulaire">

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label mot">NOM</label>
    <input type="text" class="form-control case" id="inputEmail4" placeholder='entrez votre nom'/>
  </div>


  <div class="col-md-6">
    <label for="inputPassword4" class="form-label mot" >PRENOM</label>
    <input type="text" class="form-control case" id="inputPassword4" placeholder='entrez votre prenom'/>
  </div>


  <div class="col-12">
    <label for="inputAddress" class="form-label mot">LOCALISATION</label>
    <input type="text" class="form-control case" id="inputAddress" placeholder="abidjan riviera 3"/>
  </div>

  
  <div class="col-12">
    <label for="inputAddress2" class="form-label mot">ADRESS MAIL</label>
    <input type="mail" class="form-control case" id="inputAddress2" placeholder="axelkevin@gmail.com"/>
  </div>


  <div class="col-12">
    <label for="inputAddress2" class="form-label libelnumero">NUMERO</label>
    <input type="tel" maxLength='10'  class="form-control numero" id="inputAddress2" placeholder="0707020348"/>
  </div>





  <div class="col-md-6">
    <label for="inputCity" class="form-label libelage" mot>AGE</label>
    <select id="inputState" class="form-select age">
      <option value="1">0-18</option>
      <option value="2">18-50</option>
      <option value="3">50-90</option>
    </select>
  
  </div>



  <div class="col-md-4">
    <label for="inputState" class="form-label libelsexe">SEXE</label>
    <select id="inputState" class="form-select sexe">
      <option value="homme">homme</option>
      <option value="femme"> femme</option>
      <option value="autre"> autre</option>
    </select>
  </div>



  <div class="col-md-2">
    <label for="inputZip" class="form-label labelphoto">PHOTO</label>
    <input type="file" class="form-control photo" id="inputZip"/>
  </div>


  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input case" type="checkbox" id="gridCheck"/>
      <label class="form-check-label mot" for="gridCheck">
        acceptez vous de suivre nos regles 
      </label>
    </div>
  </div>


  <div class="col-12">
    <button type="submit" class="btn btn-primary case">inscription</button>
  </div>
</form>
</div> 

    </div>
  );
}

export default App;
