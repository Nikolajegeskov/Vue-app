<template>
  <div class="create">
    <h1>Here you can add a new post</h1>
    <form>
      <input type="text" v-model="post.title" placeholder="type the title here" required>
      <input type="text" v-model="post.description" placeholder="type the description here">
      <input type="file" ref="fileInput" accept="image/*" v-on:change="previewImage">
      <button class="add-image" type="button" v-on:click="triggerChooseImg">choose Image</button>
      <div>
        <img :src="post.image" class="image-preview">
      </div>
      <button type="button" v-on:click="createPost">Create Post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db"
export default {
name: 'create',
data () {
  return{
    post: {
      title:'',
      description:'',
      image: null
    }
  }
  
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
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
  }
}
  
</script>

<style>
form {
  padding: 2em 1em 2.5em;
}
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
</style>