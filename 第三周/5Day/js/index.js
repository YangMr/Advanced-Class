var app = new Vue({
    el : "#app",
    data : {
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
        }
    },
    computed : {
        totalPrice : function () {
            var total = 0;
            for(var i=0;i<this.list.length;i++){
                total += this.list[i].price * this.list[i].count;
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
    }
})
