import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user="Hasnat Ashraf" details="CEO Logitech/Program Lead" profilePic="https://t4.ftcdn.net/jpg/08/94/98/13/360_F_894981374_XxZ18ymSms49KHzUFda40PC8PqLmP2D0.jpg"/>
      <Card  user="Amna Alif" details="Frontend Developer" profilePic="https://media.gettyimages.com/id/1867575053/photo/female-scientist-working-in-the-lab-using-computer.jpg?s=612x612&w=gi&k=20&c=mkur_T6cM386eW78Uuw3EGDZbz1HOL9oh1haIx0rQCo="/>
      <Card  user="Sadia Alif" details="Backend Developer" profilePic="https://media.gettyimages.com/id/1413817293/photo/medical-doctor-working-on-computer-inside-lab-or-research-center-reading-scientific-journals.jpg?s=612x612&w=gi&k=20&c=ZPMV3emU-6AW_qCBw6KhkdHSDuXdXmV2VcFyPV2c_Uw="/>
    </div>
  )
}

export default App
