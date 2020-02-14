import React, { Component } from 'react';

class Basic extends Component {
    render() {
        return (
            <div class="portrait">
              <div class="bg-line"></div>
              <div class="body-portrait">
                <div class="box-note">
                  <div id="slider-note">
                    <div class="carousel-inner">
                      <div class="item active">
                        こんにちは！<br />a-know（えいのう）です！
                      </div>
                    </div>
                  </div>
                </div>
                <div class="portrait-img-area">
                  <img src="assets/images/avatar.png" alt="avatar" class="avatar"/>
                  <div class="profile-links">
                  </div>
                </div>
                <h1 class="name">a-know<small>Customer Reliability Engineer</small></h1>
                <div class="deviter"></div>
                <h5>はてな という会社で Mackerel というサーバー監視SaaSプロダクトのお仕事をしています。<br />よろしくおねがいします！！</h5>
              </div>
            </div>
        );
    }
}

export default Basic;
