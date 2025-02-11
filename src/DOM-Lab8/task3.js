<p id="myParagraph">Старый текст</p>
<button id="changeBtn">Изменить текст</button>
<script>
  document.getElementById('changeBtn').onclick = () => 
    document.getElementById('myParagraph').textContent = 'Новый текст';
</script>
