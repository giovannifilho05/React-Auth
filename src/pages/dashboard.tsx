import { NextPage } from "next"
import { destroyCookie } from "nookies"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { setupAPIClient } from "../services/api"
import { AuthTokenError } from "../services/errors/AuthTokenError"
import { withSSRAuth } from "../utils/withSSRAuth"

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <h1>Dashboard: {user?.email}</h1>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupAPIClient(ctx)
  const response = await api.get('/me')

  console.log(response.data)

  return {
    props: {}
  }
})

export default Dashboard