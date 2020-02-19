import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header class="portrait">
              <div class="bg-line"></div>
              <div class="body-portrait">
                <div class="box-note">
                  <div id="slider-note">
                    <div class="carousel-inner">
                      <div class="item active">
                        instax mini Link で自己紹介！
                      </div>
                    </div>
                  </div>
                </div>

                <div class="portrait-img-area">
                  <img src="assets/images/avatar.png" alt="avatar" class="avatar" />
                  <div class="profile-links"></div>
                </div>

                <h1 class="service-name name">「はじめまして」を、<br />てのひらサイズで。<hr /><small>instax mini Link<br />✖<br />Introduction</small></h1>
                <div class="deviter"></div>
                <h6>このサービス・Webサイトはスマートフォン端末でのご利用のみを想定し、サポートしています。</h6>
              </div>
            </header>
        );
    }
}

export default Header;
