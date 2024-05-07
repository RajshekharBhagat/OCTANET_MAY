
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout';
import HomePage from './Pages/HomePage';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element ={ <Layout><HomePage/></Layout>}/>
        <Route path='/*' element = {<Navigate to = '/'/>} />
    </Routes>
  )
}

export default AppRoutes;
