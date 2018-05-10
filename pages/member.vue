<template>
  <section class="boxs">
    <article class="boxed">
      <div class="thumbnail">
        <img src="/KruJeab.jpg" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" />
      </div>
      <h1>นายฐารรรฎร  เกรัมย์</h1>
      <p>วท.บุรีรัมย์</p>
    </article>
    <article class="boxed">
      <div  class="thumbnail"><img src="/KruMax.jpg" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" />
      </div>
      <h1>นายกิตติ์โภคิน  ธนยศจินดารัชต์</h1>
      <p>วท.บุรีรัมย์</p>
    </article>
    <article class="boxed">
      <div  class="thumbnail"><img src="/Krulek.jpg" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" /></div>
      <h1>นางสุดฤดี  ประทุมชาติ</h1>
      <p>วอศ.อุบลราชธานี</p>
    </article>
    <article class="boxed">
      <div  class="thumbnail"><img src="/KruBig1.jpg" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" /></div>
      <h1>นายกัมปนาท หวะสุวรรณ</h1>
      <p>วท.ชัยภูมิ</p>
    </article>
  </section>
</template>
<style scoped>
.boxs{
  display: flex;
  flex-flow: row wrap;
}
.boxed{
  box-sizing: border-box;
  width: 280px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px #aaa;
  margin: 10px;
}
.thumbnail,img{
  background-position: center;
  background-size: cover;
  width: 260px;
  height: 200px;
}
</style>
