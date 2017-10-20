(function ($) {
  $(function () {

    // работа с инпутами (убираем класс err при вводе чего-нибудь)
    {
      $('.form__input.err').on('keyup', (e) => {
        $(e.currentTarget).removeClass('err')
      })
    }

    // кастомизация селекта
    {
      $('.js-select').selectmenu()
    }

    // событие на счетчик
    {
      $('.js-count').on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        const $input = $this.parent().find('input[readonly]')
        const value = parseInt($input.val())
        $this.minus = () => {
          if (value > 0) {
            $input.val(value - 1)
          }
        }
        $this.plus = () => { $input.val(value + 1) }
        $this[$this.data('action')]()
      })
    }

    // кастомизация календаря
    {
      $('.js-calendar').each((index, el) => {
        const $this = $(el)
        const $icon = $this.parent().find('.calendar-icon')
        const showClass = 'show'
        const datePicker = $this.datepicker({
          offset: 2,
          onShow: (dp) => {
            dp.$el.addClass(showClass)
          },
          onHide: (dp) => {
            dp.$el.removeClass(showClass)
          }
        }).data('datepicker')
        $icon.on('click', (e) => {
          e.preventDefault()
          datePicker.show()
        })
        if ($this.hasClass(showClass)) {
          datePicker.show()
        }
      })
    }

    // кастомищация инпута выбора файла
    {
      $('.js-file').jfilestyle({
        buttonText: 'Обзор',
        placeholder: 'Файл не выбран'
      })
      $('.js-file[disabled]').jfilestyle({
        disabled: true
      })
    }

  })
})(jQuery)
