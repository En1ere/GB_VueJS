import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calculator from '../components/Calculator'

describe('Test calculator inputs', () => {
    it('Test operand 1 input value', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand 2 input value', async () => {
        const wrapper = mount(Calculator)

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        expect(wrapper.vm.operand2).toBe(2)
    })
})

describe('Test calculator functions', () => {
    it('Test function sum', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('5')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('9')

        const operandBtn = wrapper.find('button[name="+"]')
        operandBtn.trigger('click')

        expect(wrapper.vm.result).toBe(14)
    })

    it('Test function subtraction', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('10')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('8')

        const operandBtn = wrapper.find('button[name="-"]')
        operandBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test function multiply', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('6')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('4')

        const operandBtn = wrapper.find('button[name="*"]')
        operandBtn.trigger('click')

        expect(wrapper.vm.result).toBe(24)
    })

    it('Test function division', async () => {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('36')

        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('4')

        const operandBtn = wrapper.find('button[name="/"]')
        operandBtn.trigger('click')

        expect(wrapper.vm.result).toBe(9)
    })
})

describe('Test calculator digital keyboard', () => {

    it('Test show digital keyboard', async () => {
        const wrapper = mount(Calculator)
        const keyboardCheckbox = wrapper.find('input[name="showKeyboard"]')

        keyboardCheckbox.trigger('click')
        expect(keyboardCheckbox.element.checked).toBeTruthy()
    })
    it('Test digital keyboard inputs operand #1', async () => {
        const wrapper = mount(Calculator)

        const keyboardCheckbox = wrapper.find('input[name="showKeyboard"]')
        await keyboardCheckbox.setChecked()

        const operand1Radio = wrapper.find('input[name=operand1Radio]')
        await operand1Radio.setChecked()

        const key1 = wrapper.find('button[name="1"]')
        key1.trigger('click')
        const key2 = wrapper.find('button[name="2"]')
        key2.trigger('click')
        const key3 = wrapper.find('button[name="3"]')
        key3.trigger('click')
        const key4 = wrapper.find('button[name="4"]')
        key4.trigger('click')
        const key5 = wrapper.find('button[name="5"]')
        key5.trigger('click')
        const key6 = wrapper.find('button[name="6"]')
        key6.trigger('click')
        const key7 = wrapper.find('button[name="7"]')
        key7.trigger('click')
        const key8 = wrapper.find('button[name="8"]')
        key8.trigger('click')
        const key9 = wrapper.find('button[name="9"]')
        key9.trigger('click')
        const key0 = wrapper.find('button[name="0"]')
        key0.trigger('click')

        expect(wrapper.vm.operand1).toBe('01234567890')
    })
    it('Test digital keyboard inputs operand #2', async () => {
        const wrapper = mount(Calculator)

        const keyboardCheckbox = wrapper.find('input[name="showKeyboard"]')
        await keyboardCheckbox.setChecked()

        const operand2Radio = wrapper.find('input[name=operand2Radio]')
        await operand2Radio.setChecked()

        const key1 = wrapper.find('button[name="1"]')
        const key2 = wrapper.find('button[name="2"]')
        const key3 = wrapper.find('button[name="3"]')
        const key4 = wrapper.find('button[name="4"]')
        const key5 = wrapper.find('button[name="5"]')
        const key6 = wrapper.find('button[name="6"]')
        const key7 = wrapper.find('button[name="7"]')
        const key8 = wrapper.find('button[name="8"]')
        const key9 = wrapper.find('button[name="9"]')
        const key0 = wrapper.find('button[name="0"]')

        key1.trigger('click')
        key2.trigger('click')
        key3.trigger('click')
        key4.trigger('click')
        key5.trigger('click')
        key6.trigger('click')
        key7.trigger('click')
        key8.trigger('click')
        key9.trigger('click')
        key0.trigger('click')

        expect(wrapper.vm.operand2).toBe('01234567890')
    })
    it('Test digital keyboard inputs delete button operand #1', async () => {
        const wrapper = mount(Calculator)

        const keyboardCheckbox = wrapper.find('input[name="showKeyboard"]')
        await keyboardCheckbox.setChecked()

        const operand1Radio = wrapper.find('input[name=operand1Radio]')
        await operand1Radio.setChecked()

        const key8 = wrapper.find('button[name="8"]')
        const key0 = wrapper.find('button[name="0"]')
        const key2 = wrapper.find('button[name="2"]')
        const delBtn = wrapper.find('button[name=deleteButton]')

        key8.trigger('click')
        key0.trigger('click')
        key2.trigger('click')

        delBtn.trigger('click')

        expect(wrapper.vm.operand1).toBe('080')
    })
    it('Test digital keyboard inputs delete button operand #2', async () => {
        const wrapper = mount(Calculator)

        const keyboardCheckbox = wrapper.find('input[name="showKeyboard"]')
        await keyboardCheckbox.setChecked()

        const operand2Radio = wrapper.find('input[name=operand2Radio]')
        await operand2Radio.setChecked()

        const key2 = wrapper.find('button[name="2"]')
        const key3 = wrapper.find('button[name="3"]')
        const key4 = wrapper.find('button[name="4"]')
        const delBtn = wrapper.find('button[name=deleteButton]')

        key2.trigger('click')
        key3.trigger('click')
        key4.trigger('click')

        delBtn.trigger('click')
        delBtn.trigger('click')

        expect(wrapper.vm.operand2).toBe('02')
    })
})