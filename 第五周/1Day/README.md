# 指令
## 全局注册
	Vue.directive("指令名",配置信息)
	
	Vue.directive("focus",{
		//只调用一次，指令第一次绑定到元素 时调用，用这个钩子函数可以定义一个在绑时执行一次的初始化动作．
		bind(){
			
		},
		//被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
		inserted(){
			
		},
		//被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
		update(){
			
		},
		//被绑定元素所在模板完成一次更新周期时调用．
		componentUpdated(){
			
		},
		//只调用一次，指令与元素解绑时调用
		unbind(){
			
		}
	})
## 局部注册
	new Vue({
		el : "#app",
		directives : {
			"指令名" : 配置信息
		}
	})
	
	new Vue({
		el : "#app",
		directives : {
			"focus" : {
					//只调用一次，指令第一次绑定到元素 时调用，用这个钩子函数可以定义一个在绑时执行一次的初始化动作．
				bind(el,binding,vnode){
					//el 表示指定绑定的元素
					//binding 配置信息
						// name   指令名称,不包含v-
						// value  指令的绑定值
						// expression 指令的绑定值,不过是指定绑定值的字符串形式
						// arg   传给指令的参数。例如 v-my-directive ：“o, arg 的值是 foo 
						// modifiers 一个包含修饰符的对象
					//vnode	 Vue 编译生成的虚拟节点
				},
				//被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
				inserted(){
					
				},
				//被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
				update(){
					
				},
				//被绑定元素所在模板完成一次更新周期时调用．
				componentUpdated(){
					
				},
				//只调用一次，指令与元素解绑时调用
				unbind(){
					
				}
			}
		}
	})