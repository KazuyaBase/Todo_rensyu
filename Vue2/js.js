const vm = new Vue({
   el: "#app",
   data: {
      items: [
         { title: '領収書を準備する', isChecked: true},
         { title: 'Vueの資料を作る', isChecked: true},
         { title: '参加人数を確認する', isChecked: false},
         { title: 'ピザを注文する', isChecked: false},
         { title: '参加費のお釣りを準備する', isChecked: false},
         { title: '会場設営をする', isChecked: false},
         
      ],
      canMessageSubmit: false,
      newItemTitle: ''
   },
   methods: {
      addTodo: function() {
         this.items.push({
            title: this.newItemTitle,
            isChecked: false
         });
         this.newItemTitle = '';
         this.saveTodo(); //ブラウザに保存
      },

      setCanMessageSubmit() {
         this.canMessageSubmit = true
       },

       say: function() {
         if (!this.canMessageSubmit) {
           return
         }
         this.newItemTitle = ''
         this.canMessageSubmit = false
      },

      deleteTodo: function() {
         this.items = this.items.filter(function(item) {
            return item.isChecked === false;
         });
         this.saveTodo(); //ブラウザに保存
      },

      saveTodo: function() {
         localStorage.setItem('item', JSON.stringify(this.items));
      },

      loadTodo: function() {
         this.items = JSON.parse( localStorage.getItem('item'));
         if (!this.items) {
            this.items = [];
         }
      } 
   },

   mounted: function() {
      this.loadTodo();
   }
});