<input type="button" id="incrementBtn" value="1">
<script>
  document.getElementById('incrementBtn').onclick = function() {
    this.value = parseInt(this.value) + 1;
  };
</script>
