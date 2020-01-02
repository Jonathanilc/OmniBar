(function () {
  $(window).on('load', function () {
    alert('Your api key is API_KEY_CONST');
  });
  const height = '40';
  const text = 'Your Omni Bar';
  const bgColor = '#888';
  const color = '#fff';
  
  $('body').prepend(`
      <div class="barWrapper" style="
        position: absolute;
        display: flex;
        height: ${height}px;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        background-color: ${bgColor};
      ">
        <div class="barInner" style="
          width: 100%;
          color: ${color};
          text-align: center;
        ">
          ${text}
        </div>
      </div>
  `);
  $('body').css('marginTop', `${height}px`);
})();