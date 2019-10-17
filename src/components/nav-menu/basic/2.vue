<template>
  <el-card class="v-card" shadow="never" :body-style="bodystyle">
    <div slot="header" class="v-cardheader">
      <el-page-header @back="$router.go(-1)" content="上传发货清单" class="v-pageheader"></el-page-header>
      <div class="v-clear"></div>
    </div>
    <div class="addorders_layout">
      <el-row>
        <el-col :span="14">
          <div class="addorders_left">
            <div>订单列表</div>
            <el-table
              ref="tbl"
              :data="OrdersItems"
              class="table_style"
              style="width:95%;"
              @cell-click="clickOrderTable"
            >
            <!-- v-for="(item,index) in IdentityImage" -->
              <!-- <el-table-column type=index label="序号" width="50"></el-table-column> -->
              
              <el-table-column prop="OrderID.Value" label="订单编号"  width="80"></el-table-column>
              <el-table-column prop="OrderTime.Value" label="订单时间"  width="100"></el-table-column>
              <el-table-column prop="OrderType.Value" label="贸易类型" width="100"></el-table-column>
              <el-table-column prop="Currency.Value" label="币种" width="80"></el-table-column>
              <el-table-column prop="OrderAmount.Value" label="订单金额" width="100"></el-table-column>
              <el-table-column prop="UnitPrice.Value" label="单价" width="80"></el-table-column>
              <el-table-column prop="OrderQuantity.Value" label="数量" width="80"></el-table-column>
              <el-table-column prop="OrderProductName.Value" label="商品名称" width="100"></el-table-column>
              <el-table-column prop="ShippingCountry.Value" label="收货人国家" width="120"></el-table-column>
              <el-table-column prop="Carrier.Value" label="物流公司" width="100"></el-table-column>
              <el-table-column prop="ShippingTrackingNumber.Value" label="物流单号" width="100"></el-table-column>
              <el-table-column width="100" label="操作">
                <template slot-scope="scope">
                  <el-button @click="deleteOrderPerInfo(scope.row)" type="text" size="small">删除行信息</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button class="button_style" @click="uploadExcel">上传导入信息</el-button>
            <el-button class="button_style">导出信息</el-button>
            <el-button class="button_style" @click="addOrderPerInfo">新增单条订单信息</el-button>
          </div>
        </el-col>
        <el-col :span="10">
          <div>物流列表</div>
          <el-table
            :data="LogisticsItems"
            @cell-click="clickLogisticsTable"
            class="table_style"
            style="width:95%"
          >
            <el-table-column prop="FileName" label="文件名字" width="100"></el-table-column>
            <!-- <el-table-column prop="Date" label="上传时间" width="120"></el-table-column> -->
            <el-table-column prop="ShippingTrackingNumber" label="物流订单号" width="120"></el-table-column>
            <el-table-column prop="Carrier" label="物流公司" width="120"></el-table-column>
            <el-table-column width="250" label="操作">
              <template slot-scope="scope">
                <el-button @click="deleteLogisticsPerInfo(scope.row)" type="text" size="small">删除行</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="button_style" @click="addLogistics">新增物流凭证</el-button>
          <!-- <el-button class="button_style">批量上传物流凭证信息</el-button> -->
        </el-col>
      </el-row>

      <div class="line_style"></div>

      <el-button class="button_style" @click="submitInfo">提交所有订单及物流凭证信息</el-button>

      <el-dialog title="新增订单信息" @close='closeAddPerOrders'  :visible.sync="OrderEditForm.DialogVisible" width="800px">
        <el-form
          :model="OrderEditForm.NewOrder"
          :rules="OrderRules"
          ref="AddOrderRef"
          label-width="100px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="订单编号" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderID.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="input_style" label="订单时间" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderTime.Value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="贸易类型" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderType.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="input_style" label="币种" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.Currency.Value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="订单金额" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderAmount.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="input_style" label="单价" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.UnitPrice.Value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="数量" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderQuantity.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="input_style" label="商品名称" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.OrderProductName.Value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="收货人国家" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.ShippingCountry.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="input_style" label="物流公司" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.Carrier.Value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item class="input_style" label="物流单号" prop="name">
                <el-input v-model="OrderEditForm.NewOrder.ShippingTrackingNumber.Value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <div v-if='IsShippingTrackingNumber' style="color:green;font-size:12px;margin-top:10px;">（已与右侧物流单号相关联 !）</div>
              <div v-else style="color:red;font-size:12px;margin-top:10px;">（注意：未与右侧物流单号相关联 !）
                 <el-button size="mini"  style="margin-top:10px;" v-if='!IsShippingTrackingNumber' @click="addLogistics">新增物流凭证</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="AddOrderDialogVisible = false">取 消</el-button>
          <el-button type="info" @click="confirmAddOrderPerInfo">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="新增物流信息" :visible.sync="AddLogisticsDialogVisible" width="600px">
        <el-form
          :model="Logistics"
          :rules="LogisticsRules"
          ref="LogisticsRef"
          label-width="100px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item style="width:470px" label="物流单号" prop="ShippingTrackingNumber">
            <el-input v-model="Logistics.ShippingTrackingNumber"></el-input>
          </el-form-item>

          <el-form-item style="width:470px" label="物流公司" prop="Carrier">
            <el-input v-model="Logistics.Carrier"></el-input>
          </el-form-item>
          
            <el-form-item style="width:470px" label="物流凭证" prop="Carrier">
            <el-upload
            name="GoodsTrade"
            :action="action"
            class="uploader"
            :show-file-list="false"
            :on-error="handleError"
            :on-success="handleSuccess"
          >
            <img v-if="Logistics.Url" :src="Logistics.Url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>

        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="AddLogisticsDialogVisible = false">取 消</el-button>
          <el-button type="info" @click="confirmAddLogisticsPerInfo">确 定</el-button>
        </span>
      </el-dialog>


      <el-dialog title="上传发货清单" :visible.sync="UploadExcelDialogVisible" width="600px" center>
       
        <span slot="footer" class="dialog-footer">
          <el-upload
            class="upload"
            drag
            name="OrderFile"
            :action="action"
            :multiple="false"
            :limit="1"
            :on-success="handleSuccess"
            :on-error="handleError"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将发货清单拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
          
          <a style="color:rgb(29, 140, 236);margin-top:20px;" href="/static/docs/Order.xlsx">下载发货清单模板</a>
          <div style="margin-top:20px;text-align:right">
             <el-button style=""  @click="UploadExcelDialogVisible = false">取 消</el-button>
            <el-button  @click="confirmUploadExcel">确 定</el-button>
          </div>
        </span>
      </el-dialog>

     
      <el-dialog :visible.sync="DeleteOrderDialogVisible" width="400px" center>
        <span style="font-size:15px;">确认要删除这行信息？</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="mini" @click="DeleteOrderDialogVisible = false">取 消</el-button>
          <el-button type="mini" @click="confirmDeletePerOrder">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog :visible.sync="DeleteLogisticsDialogVisible" width="400px" center>
        <span style="font-size:15px;">确认要删除这行信息？</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="mini" @click="DeleteLogisticsDialogVisible = false">取 消</el-button>
          <el-button type="mini" @click="confirmDeletePerLogistics">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      bodystyle: { padding: "10px", height: "500px", overflow: "auto" },
      action: $v.service.getFileUrl() + "?FilePath=TRD_TranData",
      AddOrderDialogVisible: false,
      AddLogisticsDialogVisible: false,
      DeleteOrderDialogVisible: false,
      DeleteLogisticsDialogVisible: false,
      IsShippingTrackingNumber:false,
      UploadExcelDialogVisible:false,
      RandomOrdersID:'100',
      RandomLogisticsID:'100',
      ExcelFileUrl:'',
      IsOrderEdit:false,
      IsOrderAdd:false,
      IsLogisticsEdit:'',

      OrderEditForm:{
        IsAddNew:false,
        OldOrder: {},
        NewOrder:{
          OrderID: {}, 
          OrderTime: {},
          OrderType: { },
          Currency: { },
          OrderAmount:{ }, 
          UnitPrice: { },
          OrderQuantity: { },
          OrderProductName: { },
          ShippingCountry: { },
          Carrier: { },
          ShippingTrackingNumber: {},
        },
        DialogVisible:false
      },

      Logistics: {
        ID: "",
        FileName:'',
        FileUrl:'',
        Carrier: "",
        ShippingTrackingNumber: "",
        Date: "",
        Url:'',
      },

      LogisticsItems: [
        {
          ID: "1",
          FileName: "ewfefece1",
          FileUrl: "",
          Carrier: "顺丰1",
          ShippingTrackingNumber: "MP0",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "2",
          FileName: "ewfefece2",
          FileUrl: "",
          Carrier: "顺丰2",
          ShippingTrackingNumber: "MP1",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "3",
          FileName: "ewfefece3",
          FileUrl: "",
          Carrier: "顺丰3",
          ShippingTrackingNumber: "MP8",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "4",
          FileName: "ewfefece4",
          FileUrl: "",
          Carrier: "顺丰4",
          ShippingTrackingNumber: "MP2",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "5",
          FileName: "ewfefece5",
          FileUrl: "",
          Carrier: "顺丰5",
          ShippingTrackingNumber: "MP3",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "6",
          FileName: "ewfefece6",
          FileUrl: "",
          Carrier: "顺丰6",
          ShippingTrackingNumber: "MP4",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "7",
          FileName: "ewfefece7",
          FileUrl: "",
          Carrier: "顺丰7",
          ShippingTrackingNumber: "MP5",
          Date: "2018.1",
          Url: ""
        },
        {
          ID: "8",
          FileName: "ewfefece8",
          FileUrl: "",
          Carrier: "顺丰8",
          ShippingTrackingNumber: "MP6",
          Date: "2018.1",
          Url: ""
        }
      ],

      DeletePerInfo: {},

      OrderRules: {},
      LogisticsRules: {
        ShippingTrackingNumber: [
          { required: true, message: "请输入物流单号", trigger: "blur" }
        ],
        Carrier: [
          { required: true, message: "请输入物流公司", trigger: "blur" }
        ]
      },

      OrdersItems: [
        {
          OrderID: { Value:'0',IsError:'',IsWarning:'', Message:''}, 
          OrderTime: { Value:'2019/1/1',IsError:'',IsWarning:'', Message:''},
          OrderType: { Value:'货物贸易',IsError:'',IsWarning:'', Message:''},
          Currency: { Value:'USD',IsError:'',IsWarning:'', Message:''},
          OrderAmount:{ Value:'65',IsError:'',IsWarning:'', Message:''}, 
          UnitPrice: { Value:'6.5',IsError:'',IsWarning:'', Message:''},
          OrderQuantity: { Value:'10',IsError:'',IsWarning:'', Message:''},
          OrderProductName: { Value:'Radio',IsError:'',IsWarning:'', Message:''},
          ShippingCountry: { Value:'United States',IsError:'',IsWarning:'', Message:''},
          Carrier: { Value:'UPS',IsError:'',IsWarning:'', Message:''},
          ShippingTrackingNumber: {Value:'MP0',IsError:'',IsWarning:'', Message:''},
        },
        {
          OrderID: { Value:'1',IsError:'',IsWarning:'', Message:''}, 
          OrderTime: { Value:'2019/1/1',IsError:'',IsWarning:'', Message:''},
          OrderType: { Value:'货物贸易',IsError:'',IsWarning:'', Message:''},
          Currency: { Value:'USD',IsError:'',IsWarning:'', Message:''},
          OrderAmount:{ Value:'65',IsError:'',IsWarning:'', Message:''}, 
          UnitPrice: { Value:'6.5',IsError:'',IsWarning:'', Message:''},
          OrderQuantity: { Value:'10',IsError:'',IsWarning:'', Message:''},
          OrderProductName: { Value:'Radio',IsError:'',IsWarning:'', Message:''},
          ShippingCountry: { Value:'United States',IsError:'',IsWarning:'', Message:''},
          Carrier: { Value:'UPS',IsError:'',IsWarning:'', Message:''},
          ShippingTrackingNumber: {Value:'MP1',IsError:'',IsWarning:'', Message:''},
        },
        {
          OrderID: { Value:'2',IsError:'',IsWarning:'', Message:''}, 
          OrderTime: { Value:'2019/1/1',IsError:'',IsWarning:'', Message:''},
          OrderType: { Value:'货物贸易',IsError:'',IsWarning:'', Message:''},
          Currency: { Value:'USD',IsError:'',IsWarning:'', Message:''},
          OrderAmount:{ Value:'65',IsError:'',IsWarning:'', Message:''}, 
          UnitPrice: { Value:'6.5',IsError:'',IsWarning:'', Message:''},
          OrderQuantity: { Value:'10',IsError:'',IsWarning:'', Message:''},
          OrderProductName: { Value:'Radio',IsError:'',IsWarning:'', Message:''},
          ShippingCountry: { Value:'United States',IsError:'',IsWarning:'', Message:''},
          Carrier: { Value:'UPS',IsError:'',IsWarning:'', Message:''},
          ShippingTrackingNumber: {Value:'MP2',IsError:'',IsWarning:'', Message:''},
        },
        
     
      ],

      DelOrderID: "",
      DelLogisticsID: ""
    };
  },
  created() {
    var that = this;
    that.bodystyle.height = $v.common.getCardBodyHeight();
    // console.log('duixiang1',this.duixiang)
    // this.duixiang.splice(0,1);
    // console.log('duixiang2',this.duixiang)
  },
  methods: {
    uploadExcel(){
      this.UploadExcelDialogVisible = true;
    },
    addOrderPerInfo() {
      // this.Orders.ID = "";
      this.Orders.OrderID = "";
      this.Orders.OrderTime = "";
      this.Orders.OrderType = "";
      this.Orders.Currency = "";
      this.Orders.OrderAmount = "";
      this.Orders.UnitPrice = "";
      this.Orders.OrderQuantity = "";
      this.Orders.OrderProductName = "";
      this.Orders.ShippingCountry = "";
      this.Orders.Carrier = "";
      this.Orders.ShippingTrackingNumber = "";
      this.AddOrderDialogVisible = true;
      this.IsOrderAdd = true;
    },

    closeAddPerOrders(){
      this.IsOrderEdit = false;
      this.IsOrderAdd = false;
    },

    confirmAddOrderPerInfo() {
      console.log('this.OrderEditForm.IsAddNew',this.OrderEditForm.IsAddNew)
      if(this.OrderEditForm.IsAddNew){
        this.Orders.push(this.OrderEditForm.NewOrder);
      }
      else{
        for(var fieldName in this.OrderEditForm.NewOrder){
          this.OrderEditForm.OldOrder[fieldName]=this.OrderEditForm.NewOrder[fieldName];
        }
      }
      this.OrderEditForm.DialogVisible=false;

      return;
     var IsOrder = this.OrdersItems.filter(a => a.OrderID.Value == this.Orders.OrderID)|| ''
    
      if(IsOrder.length>0){
        this.OrdersItems.some((item, i) => {
        if (item.OrderID.Value == this.Orders.OrderID) {
          for(var key in this.Orders){
            console.log('this.Orders[key]',this.Orders[key])
            this.OrdersItems[i][key].Value = this.Orders[key]
          }
          return true;
        }
      });
       this.AddOrderDialogVisible = false;
      return;
    }

      this.RandomOrdersID ++ 
      this.OrdersItems.push({
        OrderID:{Value:this.Orders.OrderID},
        OrderTime: {Value:this.Orders.OrderTime},
        OrderType: {Value:this.Orders.OrderType},
        Currency: {Value:this.Orders.Currency},
        OrderAmount: {Value:this.Orders.OrderAmount},
        UnitPrice: {Value:this.Orders.UnitPrice},
        OrderQuantity:{Value:this.Orders.OrderQuantity},
        OrderProductName: {Value:this.Orders.OrderProductName},
        ShippingCountry: {Value:this.Orders.ShippingCountry},
        Carrier: {Value:this.Orders.Carrier},
        ShippingTrackingNumber: {Value:this.Orders.ShippingTrackingNumber},
      });
      console.log('this.OrdersItems',this.OrdersItems)
      this.AddOrderDialogVisible = false;
    
    },

    confirmAddLogisticsPerInfo(){
      var IsLogistics = this.LogisticsItems.filter(a => a.ID == this.Logistics.ID)|| ''
      if(IsLogistics.length>0){
        this.LogisticsItems.some((item, i) => {
        if (item.ID == this.Logistics.ID) {
          for(var key in this.Logistics){
            this.LogisticsItems[i][key] = this.Logistics[key]
          }
          return true;
        }
      });
       this.AddLogisticsDialogVisible = false;
      return;
     }
     this.RandomLogisticsID ++
     this.LogisticsItems.push({
        ID: this.RandomLogisticsID,
        FileName:this.Logistics.FileName,
        FileUrl:this.Logistics.FileUrl,
        Carrier: this.Logistics.Carrier,
        ShippingTrackingNumber: this.Logistics.ShippingTrackingNumber,
        Date: this.Logistics.Date,
        Url:this.Logistics.Url,
      });
      this.AddLogisticsDialogVisible = false;
      var ShippingTrackingNumber = this.LogisticsItems.filter(a => a.ShippingTrackingNumber == this.Orders.ShippingTrackingNumber)
      if(ShippingTrackingNumber.length>0){
        this.IsShippingTrackingNumber = true
      }else{
        this.IsShippingTrackingNumber = false
      }
    },

    clickOrderTable(row, column, cell, event,index) {
      this.OrderEditForm.IsAddNew=false;
      this.OrderEditForm.OldOrder=row;
      this.OrderEditForm.NewOrder=JSON.parse(JSON.stringify(row));
      this.OrderEditForm.DialogVisible=true;
    },

    clickLogisticsTable(row) {
      this.Logistics.ID = row.ID
      this.Logistics.FileName = row.FileName
      this.Logistics.FileUrl = row.FileUrl
      this.Logistics.Url = row.Url
      this.Logistics.Carrier = row.Carrier
      this.Logistics.ShippingTrackingNumber = row.ShippingTrackingNumber
      this.AddLogisticsDialogVisible = true;
    },

    deleteOrderPerInfo(Per) {
      event.stopPropagation();
      console.log(Per);
      this.DeleteOrderDialogVisible = true;
      this.DelOrderID = Per.ID;
    },

    deleteLogisticsPerInfo(Per) {
      event.stopPropagation();
      console.log(Per);
      this.DeleteLogisticsDialogVisible = true;
      this.DelLogisticsID = Per.ID;
    },

    confirmDeletePerOrder() {
      console.log("DelOrderID", this.DelOrderID);
      this.OrdersItems.some((item, i) => {
        if (item.ID == this.DelOrderID) {
          this.OrdersItems.splice(i, 1);
          return true;
        }
      });
      this.DeleteOrderDialogVisible = false;
    },

    confirmUploadExcel(){
      console.log('ExcelFileUrl',this.ExcelFileUrl)
      var that = this
      $v.service.call({
        action: "ReadOrderItems",
        type: "POST",
        data: { FileUrl:that.ExcelFileUrl },
        callback: function(data) {
          if (data.Success) {
            console.log('data',data)
            // Value
            that.OrdersItems = data.Data.DataItems
          }else {
            that.$message.error(data.Message);
          }
        }
      });
      that.UploadExcelDialogVisible = false
    },

    confirmDeletePerLogistics() {
      console.log("DelLogisticsID", this.DelLogisticsID);
      this.LogisticsItems.some((item, i) => {
        if (item.ID == this.DelLogisticsID) {
          this.LogisticsItems.splice(i, 1);
          return true;
        }
      });
      this.DeleteLogisticsDialogVisible = false;
      // console.log(index);
      // this.LogisticsItems.splice(index, 1);
    },

    handleError() {
      this.$message.error("上传失败");
    },

    handleSuccess(res) {
      console.log("res", res);
      if (res.Data[0].Name == "GoodsTrade") {
        this.$message.success("上传成功");
        this.Logistics.FileName = res.Data[0].ClientFileName,
        this.Logistics.FileUrl = res.Data[0].FileName;
        this.Logistics.Url = res.Data[0].Url;
      }else if (res.Data[0].Name == "OrderFile") {
        this.$message.success("上传成功");
        this.ExcelFileUrl = res.Data[0].FileName;
      }
    },

    addLogistics() {
      this.Logistics.ID = '',
      this.Logistics.FileName = '',
      this.Logistics.FileUrl = '',
      this.Logistics.Carrier = '',
      this.Logistics.ShippingTrackingNumber = '',
      this.Logistics.Date = '',
      this.Logistics.Url = ''
      this.AddLogisticsDialogVisible = true;
    },
    submitInfo() {},
    
    updateOrdersItems(){
      var that = this
          if(that.LogisticsItems.length>0){
            for(var k = 0;that.LogisticsItems.length > k;k++ ){
              that.LogisticsItems[k].OrderNumberItems = []
            }
          }


          if(that.OrdersItems.length>0){
            for(var q = 0;that.OrdersItems.length > q;q++ ){
              that.OrdersItems[q].IsBindShippingTrackingNumber = ''
            }
          }


      if(that.OrdersItems.length>0 ){
            if(that.LogisticsItems.length>0){
              for(var i = 0;that.OrdersItems.length>i; i++){
                for(var j = 0;that.LogisticsItems.length > j;j++ ){
                  if(that.OrdersItems[i].ShippingTrackingNumber.Value == that.LogisticsItems[j].ShippingTrackingNumber.Value && that.OrdersItems[i].Carrier.Value == that.LogisticsItems[j].Carrier.Value  ){
                      that.OrdersItems[i].IsBindShippingTrackingNumber = true
                      console.log('OrdersItems',that.OrdersItems[i])
                      that.LogisticsItems[j].OrderNumberItems.push(that.OrdersItems[i])
                  }else{
                    // that.OrdersItems[i].IsBindShippingTrackingNumber = false
                  }
                }
              }
            }else{
              for(var i = 0;that.OrdersItems.length>i; i++){
                that.OrdersItems[i].IsBindShippingTrackingNumber = false
              }
            }
            console.log('jieguo',that.OrdersItems)
          }
    },


    

    
  },

  watch:{
    'Orders.ShippingTrackingNumber':function(value){
      console.log('value',value)
      console.log('this.LogisticsItems',this.LogisticsItems)
      var ShippingTrackingNumber = this.LogisticsItems.filter(a => a.ShippingTrackingNumber == value)
      
      if(ShippingTrackingNumber.length>0){
        this.IsShippingTrackingNumber = true
      }else{
        this.IsShippingTrackingNumber = false
      }
    }, 
  }
};
</script>

<style scoped>
.table_style {
  margin-top: 10px;
  border: 1px rgb(228, 228, 228) solid;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
}

.addorders_layout {
  font-size: 16px;
  font-weight: 600;
}

.addorders_left {
  height: 500px;
  margin-bottom: 100px;
}

.logistics_layout {
  margin-top: 10px;
  width: 420px;
  border: 1px rgb(212, 212, 212) solid;
  padding: 10px;
  border-radius: 5px;
}

.line_style {
  float: right;
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background-color: rgb(204, 204, 204);
}

.button_style {
  margin-top: 20px;
}

.input_style {
  width: 350px;
}

.uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
}

.previewPic {
  width: 178px;
  height: 178px;
  display: block;
}
.uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.uploader:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-last {
  width: 178px;
  height: 178px;
  display: block;
}

.uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>






