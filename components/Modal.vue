<template>
  <div class="modal">
    <style>
      html {
        overflow-y: hidden;
      }
    </style>
    <div class="modal-wrap" @click="closeModal"></div>
    <div class="modal-container" :class="(modalActive) ? 'modal-container--active':''">
      <button class="modal-close" @click="closeModal">+</button>
      <div class="modal-text" v-html="itemsModal[modal_id]"></div>
    </div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      modalActive: false,
      itemsModal: {
        terms: `<h1>Terms of use</h1>
<div>
    <div class="modal__content-text">
      <h3>1. Terms</h3>
      <p>By accessing the website at trendbudha.com, you are agreeing to be bound by these terms of service, all
        applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
        laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The
        materials contained in this website are protected by applicable copyright and trademark law.</p>
      <h3>2. Use License</h3>
      <p>Permission is granted to temporarily download one copy of the materials (information or software) on Trend
        Budha’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
        transfer of title, and under this license you may not:<br>modify or copy the materials;<br>use the materials for
        any commercial purpose, or for any public display (commercial or non-commercial);<br>attempt to decompile or
        reverse engineer any software contained on Trend Budha’s website;<br>remove any copyright or other
        proprietary notations from the materials; or<br>transfer the materials to another person or “mirror” the
        materials on any other server.<br>This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by Trend Budha at any time. Upon terminating your viewing of these
        materials or upon the termination of this license, you must destroy any downloaded materials in your possession
        whether in electronic or printed format.</p>
      <h3>3. Disclaimer</h3>
      <p>The materials on Trend Budha’s website are provided on an ‘as is’ basis. Trend Budha makes no
        warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
        limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property or other violation of rights.</p>
      <p>Further, Trend Budha does not warrant or make any representations concerning the accuracy, likely results,
        or reliability of the use of the materials on its website or otherwise relating to such materials or on any
        sites linked to this site.</p>
      <h3>4. Limitations</h3>
      <p>In no event shall Trend Budha or its suppliers be liable for any damages (including, without limitation,
        damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
        the materials on Trend Budha’s website, even if Trend Budha or a Trend Budha authorized
        representative has been notified orally or in writing of the possibility of such damage. Because some
        jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or
        incidental damages, these limitations may not apply to you.</p>
      <h3>5. Accuracy of materials</h3>
      <p>The materials appearing on Trend Budha’s website could include technical, typographical, or photographic
        errors. Trend Budha does not warrant that any of the materials on its website are accurate, complete or
        current. Trend Budha may make changes to the materials contained on its website at any time without notice.
        However Trend Budha does not make any commitment to update the materials.</p>
      <h3>6. Links</h3>
      <p>Trend Budha has not reviewed all of the sites linked to its website and is not responsible for the
        contents of any such linked site. The inclusion of any link does not imply endorsement by Trend Budha of
        the site. Use of any such linked website is at the user’s own risk.</p>
      <h3>7. Modifications</h3>
      <p>Trend Budha may revise these terms of service for its website at any time without notice. By using this
        website you are agreeing to be bound by the then current version of these terms of service.</p>
      <h3>8. Governing Law</h3>
      <p>These terms and conditions are governed by and construed in accordance with the laws of USA and you irrevocably
        submit to the exclusive jurisdiction of the courts in that State or location.</p>
    </div>
  </div>`,
        gdpr: `<h1>GDPR</h1>`,
        privacy: `<h1>Privacy Policy</h1
<div>
      <p> Your privacy is important to us. It is Trend Budha’s policy to respect your privacy regarding any
        information we may collect from you across our website, https://trendbudha.com/, and other sites we own and
        operate.
      </p>
      <p> We only ask for personal information when we truly need it to provide a service to you. We collect it by fair
        and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will
        be used.
      </p>
      <p> We only retain collected information for as long as necessary to provide you with your requested service. What
        data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as
        unauthorized access, disclosure, copying, use or modification.
      </p>
      <p> We don’t share any personally identifying information publicly or with third-parties, except when required to
        by law.
      </p>
      <p> Our website may link to external sites that are not operated by us. Please be aware that we have no control
        over the content and practices of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p> You are free to refuse our request for your personal information, with the understanding that we may be unable
        to provide you with some of your desired services.
      </p>
      <p> Your continued use of our website will be regarded as acceptance of our practices around privacy and personal
        information. If you have any questions about how we handle user data and personal information, feel free to
        contact us.
      </p>
      <p> This policy is effective as of 13 July 2020.
      </p>
    </div>`,
        return: `<h1>Return and Exchange</h1>`
      }
    }
  },
  props: ['modal_id'],
  methods: {
    closeModal(e) {
      e.preventDefault()
      this.modalActive = false;
      setTimeout(() => {
        this.$parent.idModal = false;
      }, 500);
    }
  },
  mounted() {
    if (this.modal_id) {
      setTimeout(() => {
        this.modalActive = true;
      }, 0);
    }
  }
}
</script>
<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  padding: 30px 15px;
  overflow-y: auto;
  background: rgba(0, 0, 0, .75);
  @media(min-width: 768px) {
    padding: 60px 15px;
  }
  &-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    transition: background .3s ease;
    &:hover {
      background: rgba(255, 255, 255, .05);
    }
  }
  &-container {
    background: #fff;
    max-width: 100%;
    width: 1000px;
    padding: 60px 15px 30px 15px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    transform: translate(0, 50%);
    opacity: 0;
    transition: 1s ease-in-out;
    &--active {
      transform: translate(0, 0%);
      opacity: 1;
    }
  }
  &-close {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    padding: 0;
    font-size: 40px;
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    &:hover {
      opacity: .7;
    }
  }
  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $grey;
    border-bottom: 2px solid $grey;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    text-align: start;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: $grey;
    margin: 0;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 1.2;
    margin: 10px 0;
    text-align: start;
  }
}
</style>
