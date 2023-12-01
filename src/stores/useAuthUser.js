import { defineStore } from 'pinia'
import useSupabase from 'src/boot/supabase'
import { ref } from 'vue'

export const useAuthUserStore = defineStore('useAuthUser', () => {
  const { supabase } = useSupabase()
  const user = ref(null)

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    return user
  }

  const loginWithSoicialProvider = async (provider) => { }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
      }
    )
    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }
  return {
    user, login, loginWithSoicialProvider, isLoggedIn, update, sendPasswordRestEmail, register, logout
  }
})
