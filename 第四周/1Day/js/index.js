var app = new Vue({
    el : "#app",
    data : {
        check : false,
        list : []
    },
    methods : {
        handleReduce : function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        remove : function (index) {
            this.list.splice(index,1)
        },
        handleAdd : function (index) {
            this.list[index].count++;
        },
        checkAll : function () {
            var that = this;
           this.list.forEach(function (item,index) {
               item.check = that.check;
           })
        },
        curChange : function () {
            this.change();
        },
        change : function () {
            var elements = this.list.filter(function (item,index) {
                return item.check == true;
            });

            if(elements.length == this.list.length){
                this.check = true;
            }else{
                this.check = false;
            }
        }
    },
    computed : {
        totalPrice : function () {
            var total = 0;
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].check){
                    total += this.list[i].price * this.list[i].count;
                }
            }
            // return total;
            return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
        }
    },
    filters : {

    },
    created(){
        var _this = this;
        axios.get("http://localhost:8889/").then(function (response) {
            _this.list = response.data.productList
            console.log(response.data.productList)
        }).catch(function (error) {
            console.log(error)
        })
    },
    mounted(){
        this.change()
    }
})
