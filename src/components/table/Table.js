import {$} from '@core/dom'
import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.function'
import {TableSelection} from '@/components/table//TableSelection'
import {isCell} from '@/components/table/table.function'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(40)
  }

  prepare() {
    console.log
  }
  init() {
    super.init()
    this.seletion = new TableSelection
    const $cell = this.$root.find('[data-id="0:0"]')
    this.seletion.select($cell)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      this.seletion.select($target)
    }
  }
}


