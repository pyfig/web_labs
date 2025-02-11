<input type="text" id="textInput">
<p id="resultText"></p>
<script>
  document.getElementById('textInput').onblur = function() {
    document.getElementById('resultText').textContent += this.value;
    this.value = ''; // Очистка инпута (опционально)
  };
</script>
