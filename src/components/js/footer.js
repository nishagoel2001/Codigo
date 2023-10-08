import React from 'react';
import '../css/footer.css';

export default function footer() {
  return (
    <>
      <footer className="bg-light">
        <div className="container p-4">
          <div className="text-center footer-text">
            <b>Let's have a chat</b>
          </div>
          <div div className="row mt-5">
            <div className="col-lg footer-cont"><p className="footer-cont">Build</p><p className='footer-subcont'>Help you build something</p></div>
            <div className="col-lg footer-cont"><p className="footer-cont">Co-incubate</p><p className='footer-subcont'>Co-incubate an idea together</p></div>
            <div className="col-lg footer-cont"><p className="footer-cont">Customise</p><p className='footer-subcont'>Customise a solution for your business</p></div>
            <div className="col-lg footer-cont"><p className="footer-cont">Organise</p><p className='footer-subcont'>Organise learning sessions with us</p></div>
            <div className="col-lg footer-cont"><p className="footer-cont">Tech for Hire</p><p className='footer-subcont'>Hire experienced tech talents</p></div>
          </div>
        </div>

        <div className="text-center p-3">
          Copyright © Codigo - Mobile App Developer Singapore
          <br />
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </div>
      </footer>
    </>
  );
}
