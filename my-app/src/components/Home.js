
  import {useEffect} from 'react';

  export const Home = () => {
        useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  
    return (
      <div>
  
        <div style={{height: '155rem'}} />
  
        {/* 👇️ scroll to top on button click */}
        <button
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          style={{
            position: 'fixed',
            padding: '1rem 2rem',
            fontSize: '10px',
            bottom: '40px',
            right: '40px',
            backgroundColor: 'red',
            color: '#fff',
            textAlign: 'center',
            borderRadius: "100px",
            border: 'none',
            // display:'none'
          }}
        ><i class="fas fa-arrow-up"></i>

       </button>
      </div>
    );
  }
  