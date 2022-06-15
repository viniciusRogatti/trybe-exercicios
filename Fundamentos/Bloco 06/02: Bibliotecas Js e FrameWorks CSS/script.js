var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD MM YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('DD MM YYYY'));
    }
});