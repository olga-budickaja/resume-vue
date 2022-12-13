<template>
 <section class="certificates top70">
   <MainTitle>My certificates</MainTitle>
   <div class="row">
     <div class="col s12 m6">
       <div class="card">
         <a class="card-image waves-effect waves-block waves-light" href="https://testprovider.com/ru/search-certificate/tp80460092d" target="_blank">
           <img  src="../assets/img/certificates/Frontend_Developer(React)_Diploma.png" alt="Frontend Developer(React) Diploma">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP34336669">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/React_Essential.png" alt="React Essential">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP29061995" target="_blank">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/HTML5&CSS3_Advanced.png" alt="HTML5&CSS3 Advanced">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP29492832" target="_blank">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/JavaScript_Essential.png" alt="JavaScript Essential">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP56582124" target="_blank">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/Git_basic.png" alt="Git Basic">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP89058055" target="_blank">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/JavaScript_starter.png" alt="JavaScript Starter">
         </a>
       </div>
     </div>
     <div class="col s12 m6">
       <div class="card">
         <a href="https://testprovider.com/ru/search-certificate/TP25398204" target="_blank">
           <img class="card-image waves-effect waves-effect waves-block waves-light" src="../assets/img/certificates/HTML5&CSS3_Starter.png" alt="HTML5 & CSS3 Starter">
         </a>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
import MainTitle from "@/UI/MainTitle";
export default {
  name: 'certificates-page',
  components: {MainTitle}
}
</script>

<style scoped lang="scss">
.row {
  margin-top: 60px;
}
.card {
  background: var(--color-background);
}
.card-image {
  width: 100%;
  height: auto;
}
</style>