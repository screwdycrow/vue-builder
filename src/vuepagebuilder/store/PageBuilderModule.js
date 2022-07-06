import _ from 'lodash'
export const pageBuilderModule = {
  namespaced: true,
  state:()=>({
    posts:{}
    componentTypes:{}
    selectedComponent:null
    activePost:null
    editor:null,
    tempEditorContent:null,
    savePostFn:function(){return Promise.resolve()}
    removePostFn:function(){return Promise.resolve()}
    addPostFn:function(){return Promise.resolve()},
    getPosts:function(){return Promise.resolve()},
  })
  actions:{
  },
  mutations:{
    setPosts(state, posts){
      state.posts = posts.reduce((acc, p)=>({...acc, p.name:p }),{})
    }
    setActivePost(state, postName){
      state.activePost = postName
    },
    setEditor(state,postName){
      state.editor = postName
    }
    setSelectedComponent(state, component){
      state.selectedComponent = _.cloneDeep(component)
    }
    setTempPost(state,post){
      state.tempEditorContent = _.cloneDeep(post.content)
    }
    setComponent(state,component){
      s.posts[s.editor].content.findIndex(c=>c.id === component.id)
    }
    setPostContent(state,{postName,postContent}){
      s.posts[postName].content = _.cloneDeep(postContent)
    },
    setPostCallbacks(state,{save,remove,add,getAll}){
      if(typeof save = "function")state.savePostFn = save;
      if(typeof remove = "function") state.removePostFn = remove;
      if(typeof add = "function") state.addPostFn  = add;
      if(typeof getAll = "function") state.getPosts  = getAll;
    }
  }
  getters:{
    editorContent:s=>s.posts[s.editor].content,
    postContentOf=>s=>post=>s.posts[post].content,
  }
}
