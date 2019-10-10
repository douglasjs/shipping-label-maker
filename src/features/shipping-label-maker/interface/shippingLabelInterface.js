export default class ShippingLableInterface {

    constructor(from, to, weight, shippingOption ){
        this.from = from;
        this.to = to;
        this.weight= weight;
        this.shippingOption = shippingOption;
    }


    setFrom(from){
        this.from = from;
    }

    getFrom(){
        return this.from;
    }


    setTo(to){
        this.to = to;
    }

    getTo(){
        return this.to;
    }


    setWeight(weight){
        this.weight = weight;
    }

    getWeight(){
        return this.weight;
    }

    setShippingOption(shippingOption){
        this.shippingOption = shippingOption;
    }

    getShippingOption(){
        return this.shippingOption;
    }

}