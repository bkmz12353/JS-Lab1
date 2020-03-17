function script() {
    let i;
    let text='';

        for (i = 2; i<1000; i++)
        {
            if (i%3 == 1 && i%17 == 1){
                text=text+i+', ';
            }
        }
    alert(text);
}