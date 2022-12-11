<template>
  <MyPromo />
  <MySkills />
  <MyWorks/>
  <MyHobby/>
</template>

<script>
import MySkills from "@/components/skills/MySkills";
import MyPromo from "@/components/promo/MyPromo";
import MyWorks from "@/components/works/MyWorks";
import MyHobby from "@/components/hobby/MyHobby";

export default {
  components: {
    MyHobby,
    MyWorks,
    MyPromo,
    MySkills,
  },
}
</script>

<style scoped>

</style>