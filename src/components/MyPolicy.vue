<template>
  <section class="policy">
    <div class="container">
      <MainTitle>Policy regarding the processing of personal data</MainTitle>
      <div class="card policy__card">
        <ul class="collection with-header policy__list">
          <li class="collection-header policy__item">
            <h4 class="white-text">1.General provisions</h4>
            <p class="white-text">This personal data processing policy has been drawn up in accordance with the requirements of the Federal Law of July 27, 2006. No. 152-FZ "On Personal Data" (hereinafter - the Law on Personal
              data) and determines the procedure for processing personal data and measures to ensure the security of personal data taken by Olga Budytska (hereinafter referred to as the Operator).</p>
          </li>
          <li class="collection-item white-text">1.1. The operator sets as its most important goal and condition for the implementation of its activities
            observance of the rights and freedoms of a person and a citizen in the processing of his personal data, including the protection of the rights to privacy, personal and family secrets.</li>
          <li class="collection-item white-text">1.2. This Operator's policy regarding the processing of personal data
            (hereinafter referred to as the Policy) applies to all information that the Operator can receive about visitors to the website https://localhost:3000/.</li>
          <li class="collection-header policy__item">
            <h4 class="white-text">2. Basic concepts used in the Policy</h4>
          </li>
          <li class="collection-item white-text">2.1. Automated processing of personal data - processing of personal
            data using computer technology.</li>
          <li class="collection-item white-text">2.2. Blocking of personal data is a temporary suspension of the processing of personal data (unless the processing is necessary to clarify personal data).</li>
          <li class="collection-item white-text">2.3. Website - collection
            graphic and information materials, as well as computer programs and databases that ensure their availability on the Internet at the network address https://localhost:3000/.</li>
          <li class="collection-item white-text">2.4. Information system of personal data - a set of data contained in databases of personal data, and information technologies and technical means providing their processing.</li>
          <li class="collection-item white-text">2.5. Depersonalization of personal data - actions, as a result of which it is impossible to determine without the use of additional information belonging of personal data to a specific User or other subject of personal data.</li>
          <li class="collection-item white-text">2.6. Processing of personal data - any action (operation) or a set of actions (operations) performed using automation tools
            or without the use of such means with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization,
            blocking, deletion, destruction of personal data.</li>
          <li class="collection-item white-text"> 2.7. Operator - a state body, municipal body, legal entity or individual, independently or jointly with other persons organizing and (or) carrying out the processing of personal
            data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data.</li>
          <li class="collection-item white-text">2.8. Personal data - any information relating directly or indirectly to
            to a specific or identifiable User of the website https://localhost:3000/. </li>
          <li class="collection-item white-text">2.9. Personal data authorized by the subject of personal data for dissemination - personal data, access to which is granted to an unlimited number of persons
            the subject of personal data by giving consent to the processing of personal data permitted by the subject of personal data for distribution in the manner prescribed by the Law on Personal Data (hereinafter referred to as personal data permitted for
            distribution). </li>
          <li class="collection-item white-text">2.10. User - any visitor to the website https://localhost:3000/.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import MainTitle from "@/UI/MainTitle";
export default {
  name: 'my-policy',
  components: {MainTitle}
}
</script>

<style scoped lang="scss">
.policy {
  padding-top: 130px;
  &__card {
    margin-top: 70px;
  }
}
.collection .collection-item {
  background-color: var(--color-background);
}
.collection.with-header .collection-header {
  background-color: var(--color-background);
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
}
</style>