import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router/index'

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        idToken:null,
        userId:null,
        user:{name:'',
              email:''}
    },
    getters:{

        getUser : state => state.user,
        isAuthenticated: state => {
            return state.idToken !== null  
        }


    },
    actions:{

        signup({commit},authData){
       
          axios.put('/auth/signup',authData)
          .then(response=>
            {console.log(response);
              commit('setSignUpData',response.data);
            })
          .catch(err=>console.log(err))
         

        },
        login({commit,dispatch},authData){
            axios.post('/auth/login',authData)
            .then(response=>{
                console.log(response);
                const now = new Date();
                    const expirationDate = new Date (now.getTime() + response.data.expiresIn*1000);
                    console.log(expirationDate)
                    localStorage.setItem('idToken',response.data.token);
                    localStorage.setItem('expirationDate',expirationDate);
                    localStorage.setItem('userId',response.data.userId);
                
                
                commit('setLogInData',response.data);
                dispatch('getUser',response.data);
                dispatch('setLogoutTimer',response.data.expiresIn);
                

            })
            .catch(err=>console.log(err))
             

        },

        tryAutoLogin({commit,dispatch}){

              const token = localStorage.getItem('idToken')
              if(!token) return ;
              const expirationDate = localStorage.getItem('expirationDate')
              const now = new Date();
              if(now >= expirationDate){
                  return ;
              }
              const userId = localStorage.getItem('userId')

              commit('setLogInData',{token:token,userId:userId})
              dispatch('getUser',{userId:userId})

        },

        getUser({commit,state},user){
            console.log('this is called' + state.idToken);
           if(state.idToken){
             axios.get('/user/'+user.userId,{headers:{

                'Authorization': 'Bearer '+state.idToken
             }})
             .then(userDoc=>{
                 console.log('thisis ' + JSON.stringify(userDoc))
                 commit('setUser',userDoc.data);
             })
             .catch(err=> console.log(err));  

            }

        },

        clearAuth({commit}){
            commit('clearAuthData');
            //Clear the local storage;
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('idToken');
            localStorage.removeItem('userId');
            router.replace('/login')
        },

        setLogoutTimer({commit},expirationTimer){

            setTimeout(()=>{
              commit('clearAuthData');
            },expirationTimer*1000);
        }

        
    },
    mutations:{

     setLogInData : (state,userData)=>{
           state.idToken = userData.token;
           state.userId = userData.userId;
        },

     setSignUpData:(state,userData)=>{
         state.userId = userData.userId;
         
     },

     setUser:(state,userData)=>{
         state.user = {name:userData.name,email:userData.email};
         console.log(state.user)
     },

     clearAuthData:(state)=>{
         state.idToken=null;
         state.userId = null;
         state.user = {name:'',email:''}
     }
    
    }
 

})

