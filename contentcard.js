"use strict"
class ContentCard extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = `
        <style>
        div {
            padding: 5px max(10mm, 5vw);
        }
        </style>
        <div>
            <slot name="heading"></slot>
            <slot name="description"></slot>
        </div>`
    }
}
class ContentHeading extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open'})
        this.shadow.innerHTML = `<h2>${this.id}</h2>`
    }
}
const li = [
    'Lorem ipsum dolor sit amet consectetur adipiscing, elit porta gravida hendrerit nisl donec eget, imperdiet lobortis risus dignissim elementum. Dapibus iaculis phasellus senectus mattis posuere massa magnis taciti, nisi sociosqu commodo aliquam pharetra curabitur parturient porta feugiat, odio cursus suspendisse vitae velit neque fusce. Ut viverra orci curae mi potenti volutpat ullamcorper, aptent fermentum fames id sagittis ultrices ante nullam, ad dui nibh venenatis mollis gravida.',
    'ridiculus mattis volutpat mollis taciti nam cubilia, sociis vel lacus pharetra nibh aliquet iaculis torquent vivamus. Commodo proin lacus id et mollis nunc ut congue, ultricies nisl fames lobortis risus condimentum penatibus, fusce magnis elementum dignissim diam fringilla iaculis. Mi felis nec vitae penatibus platea phasellus per donec tortor torquent tristique, mollis purus lobortis justo nisl magna vestibulum laoreet diam. Facilisi tempor ante luctus rhoncus est venenatis, cum risus fringilla felis hendrerit, varius imperdiet dictumst nunc taciti. Vulputate maecenas rhoncus faucibus placerat curae iaculis cum, parturient litora taciti lacus mauris neque commodo sociosqu, suspendisse posuere in ac ullamcorper eleifend.',
    'Nec ante ligula placerat quam vitae hendrerit himenaeos donec, suscipit proin praesent class potenti semper magna dignissim enim, aliquet fusce imperdiet sem tortor in orci. Habitant lobortis habitasse himenaeos euismod blandit posuere dignissim nam, cum tempor condimentum nunc consequat a natoque, hendrerit convallis bibendum orci potenti vulputate senectus. Purus bibendum turpis porta nullam euismod fermentum primis, pellentesque viverra etiam eros pharetra volutpat himenaeos ornare, vulputate faucibus integer rhoncus maecenas orci.',
    'Egestas suscipit taciti ultrices enim euismod accumsan ante sodales, tempor porta duis interdum ligula ridiculus ac pulvinar, convallis nam a odio vitae consequat id. Aliquet sagittis pulvinar penatibus fusce varius, ac accumsan mi. Sed felis tortor per etiam condimentum dui, tempus taciti ridiculus vitae hac neque metus, euismod sodales turpis luctus quam.',
    'Blandit volutpat cubilia elementum penatibus nisl ullamcorper molestie ultrices, inceptos auctor consequat fringilla montes mattis senectus hac pharetra, neque dictumst integer malesuada sem curabitur nec. Sed posuere aliquam consequat eget himenaeos etiam tempor est fames ligula turpis vehicula gravida, malesuada donec elementum sem netus habitasse faucibus potenti augue id hendrerit. Fames a lectus morbi parturient elementum purus sollicitudin nullam porttitor vehicula diam non, magnis vitae senectus iaculis nisl gravida penatibus habitant pharetra tellus urna quisque, in per velit eu lacinia sociis venenatis dictum semper dui nec. Imperdiet pulvinar litora eu dapibus bibendum eros ornare blandit dictum nisl hac pharetra, curabitur vehicula suscipit vulputate praesent facilisis accumsan egestas donec velit.',
    'Quisque magna interdum ullamcorper vehicula faucibus vivamus netus iaculis tempus diam, leo a aptent eu aliquet condimentum tristique mauris laoreet, conubia dui luctus mattis ut nunc nostra dictumst ultricies. Dictum orci primis facilisis montes enim vivamus duis, vehicula nunc est platea proin nibh. Mus augue eget netus condimentum sagittis non tortor, class euismod nascetur litora ultrices. Pulvinar ornare dui viverra bibendum molestie vitae iaculis vel sollicitudin feugiat rhoncus, neque per fringilla hendrerit lacus at ligula augue platea ultricies.',
    'Nam aliquam class ultricies molestie rhoncus in turpis vestibulum blandit, tellus nascetur luctus dictum laoreet fermentum eros aenean, et convallis mus taciti tempus morbi platea urna. Tempor aptent sagittis quisque vestibulum ante aenean eleifend blandit leo conubia, proin nisl sed velit convallis nostra suspendisse ridiculus habitasse, taciti torquent facilisis facilisi placerat phasellus vulputate semper nibh. Taciti ac accumsan pulvinar at pellentesque rhoncus orci tempus, aliquet urna scelerisque massa nibh conubia augue varius lacus, proin nec ornare sodales lectus dictum quisque. Torquent ad scelerisque suspendisse aliquet integer mattis aptent, sociis cursus velit nec imperdiet laoreet massa, parturient dictumst habitasse congue vitae non.',
    'Himenaeos venenatis lobortis mi tempor taciti posuere odio, felis aliquam mattis leo facilisi potenti, ridiculus vel scelerisque tortor a quis. Nisl odio sapien aliquam aptent dapibus conubia ridiculus tellus nullam, taciti rhoncus platea tempor lobortis eleifend phasellus nostra, nulla dictum suscipit sociis diam neque cubilia habitant. Eget montes viverra non mauris elementum vulputate, parturient curae accumsan massa curabitur cras nunc, torquent ligula blandit justo proin.',
    'Enim integer morbi ullamcorper diam dignissim mauris quisque potenti, aptent vitae condimentum convallis aenean consequat pulvinar, ut cum phasellus mattis auctor quam iaculis. Vitae iaculis nullam nulla primis mi vestibulum proin, arcu diam quis senectus cubilia neque nam massa, inceptos enim platea aenean lacinia purus. Ad tristique sed at platea accumsan lacinia litora urna, tempus vivamus posuere sagittis quis cursus molestie consequat, sociis fames rhoncus risus conubia himenaeos elementum.'
]
class LoremIpsum extends HTMLElement {
    static get observedAttributes() {
        return ['data-num']
    }
    list = num => {
        const p = num > 0 && num <= 9 ? num : 1
        let out = ''
        for(let i = 1; i <= p; i++){
            out += `<p>${li[i-1]}</p>`
        }
        return out
    }
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open'})
        const html = this.list(parseInt(this.dataset.num))
        this.shadow.innerHTML = html
        console.log('element: ', this)
        console.log('shadow:', this.shadow)
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Changed ${name} from ${oldValue} to ${newValue} on ${this.shadow}`)
        //if(this.shadow) this.shadow.innerHTML = this.list(newValue)
    }
}
export { ContentCard, ContentHeading, LoremIpsum }