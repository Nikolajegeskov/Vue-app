<template>
    <div class="details">
        <div class="container" v-for="(post,Pid) in posts" :key="Pid">
            <div class="flex-container" v-if="proId == post.id">
            <h1 class="title">{{post.title}}</h1>
            <p class="dis">{{post.description}}</p>
            <img class="img" :src="post.image" alt/>
            <button class="hide-btn" v-on:click="hide = !hide">edit</button>
            <div class="edit" v-if="hide"> 
              <input type="text" v-model="post.title" placeholder="type the title here" required>
              <input type="text" v-model="post.description" placeholder="type the description here">
            <div>
            </div>
              <button type="button" v-on:click="edit(post)">edit</button>
            </div>
            </div>
            </div>
            </div>
</template>
<script>
import { postRef } from "../firebase-db"
export default {
  name:'detalis',
  data(){
      return{
        posts:[],
        proId:this.$route.params.Pid,    
        title:"details",
        newPost: '',
        newPostTitle:'',
        newPostDis: '',
        newPostImg:'',
        nowEdit:'',
        hide: false
      }
  },
    firestore:{
      posts: postRef
  },
  methods:{
      triggerChooseImg(){
    this.$refs.fileInput.click()
  },
  previewImage () {
    const imageFile = this.$refs.fileInput.files[0]
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      this.post.image = event.target.result
    }
    fileReader.readAsDataURL(imageFile)
  },
    edit (post) {
      this.nowEdit=post.id
      this.newPostTitle = post.title
      this.newPostDis = post.description
      this.newPostImg = post.image
      postRef.doc(this.nowEdit).update({
        title: this.newPostTitle,
        description:this.newPostDis,
        image: this.newPostImg
      })
   }
  }
}  
</script>
<style>
/* edit */
button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--secondary);
  width: 100%;
  max-width: 350px;
}
button.choose-image {
  background-color: var(--primary);
}
button{
 background-color:#42b983;
 color: white;
}
input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}
input[type="file"] {
    display: none;
}
.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}
.flex-container{
width: 100%;
height: 100%;
}
.DImg{
    max-width: 350px;
  width: 100%;
}
.flex-container{
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 50px 50px 265px 1fr;
grid-template-areas:
". title ."
". dis ."
". img ."
". hide-btn ."
". edit ."
;
}
.img{
justify-self: center;
grid-area: img;
}
.title{
grid-area: title;
}
.dis{
grid-area: dis;
}
.hide-btn{
justify-self: center;
grid-area: hide-btn;
text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: white;
  background-color: #42b983;
  width: 100%;
  max-width: 350px;
  height: 50px;
}
.edit{
grid-area: edit;
}
</style>