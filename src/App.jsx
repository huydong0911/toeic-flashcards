import { useState } from 'react'
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Dữ liệu mẫu để báo cáo chuyên nghiệp hơn
  const vocab = { 
    word: "Adhere to", 
    mean: "Tuân thủ", 
    ex: "All employees must adhere to the company's safety regulations." 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#333' }}>TOEIC Flashcards - Learning App</h2>
       
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          width: '350px', height: '220px', margin: '20px auto',
          perspective: '1000px', cursor: 'pointer'
        }}
      >
        <div style={{
          width: '100%', height: '100%', position: 'relative',
          transition: 'transform 0.6s', transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px'
        }}>
          {/* Mặt trước: Tiếng Anh */}
          <div style={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '28px', fontWeight: 'bold',
            backgroundColor: '#3498db', color: 'white', borderRadius: '20px'
          }}>
            {vocab.word}
          </div>
          
          {/* Mặt sau: Tiếng Việt */}
          <div style={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', fontSize: '20px',
            backgroundColor: '#2ecc71', color: 'white', borderRadius: '20px',
            transform: 'rotateY(180deg)', padding: '20px'
          }}>
            <p style={{ margin: '0', fontWeight: 'bold' }}>{vocab.mean}</p>
            <p style={{ fontSize: '14px', fontStyle: 'italic', marginTop: '10px' }}>{vocab.ex}</p>
          </div>
        </div>
      </div>
      
      <p style={{ color: '#7f8c8d' }}>Click vào thẻ để xem ý nghĩa!</p>
    </div>
  )
}

export default App