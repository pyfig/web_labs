<a id="myLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Пример ссылки</a>
<button id="hrefBtn">Показать HREF</button>
<p id="hrefDisplay"></p>
<script>
  document.getElementById('hrefBtn').onclick = () => 
    document.getElementById('hrefDisplay').textContent = 
      document.getElementById('myLink').href;
</script>
