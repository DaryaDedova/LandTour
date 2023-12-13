let slider = {//создаем массив объектов (массив из картинок + функции с ключами)
    sliders: ['banner_1.jpg', 'banner_2.jpg', 'banner_3.jpg', 'banner_4.jpg'],//массив изображений
    frame: 0, //индекс начального изображения
    set: function(image){
        document.getElementById('src').style.backgroundImage = 'url(' + image + ')' //установка нужного фона дляслайдера
    },
    init: function(){//запуск слайдера с начальной картинки
        this.set(this.sliders[this.frame]);//set - срабатывает при присвоении
    },
    left: function(){
        this.frame--;//движение влево
        if (this.frame < 0) this.frame = this.sliders.length - 1;
        this.set(this.sliders[this.frame]);
    },
    right: function(){
        this.frame++;//движение вправо
        if (this.frame == this.sliders.length) this.frame = 0;
        this.set(this.sliders[this.frame]);
    }
}


window.onload = function(){//запуск слайдера после загрузки документов
    slider.init();
    setInterval(function(){//таймер на 5 сек.
        slider.right();// после перехода на кадр справа
    }, 5000)

}