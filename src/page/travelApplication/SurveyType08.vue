<template>
  <!-- 질문31,32 -->
  <div>
      <div class="question pt-10 pb-15">아래의 단어를 보고<br>가장 먼저 떠오르는 ‘단어’를 자유롭게<br>작성해주세요</div>
      <div class="inner text-center">
        <div class="box fs-20 fw-700">비행기</div>
        <v-text-field
            filled
            solo
            flat
            background-color="#F7F7F7"
            placeholder="단어를 작성해주세요."
          ></v-text-field>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;;
  border-radius: 6px;
  border: 1px solid #D6D6D6;
  margin-bottom: 70px;
}
::v-deep.v-text-field--filled{
   .v-input__slot{
    min-height: 50px;
    padding: 0 20px !important;
  }
}
</style>