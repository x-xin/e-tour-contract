<template>
  <div class="cncn-main-wrap">
    <div class="cncn-main-wrap-2">
      <div class="cncn-main">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>合同管理</span>
            <!-- <el-button style="float: right;" type="primary">操作按钮</el-button> -->
          </div>
          <el-form :inline="true" :model="chioceForm" class="chioceForm">
            <el-form-item label="甲方代表：">
              <el-input v-model="chioceForm.present" placeholder="甲方代表"></el-input>
            </el-form-item>
            <el-form-item label="线路名称：">
              <el-input v-model="chioceForm.linename" placeholder="线路名称"></el-input>
            </el-form-item>
            <el-form-item label="线路类型：">
              <el-select v-model="chioceForm.linetype" placeholder="线路类型">
                <el-option label="省内游" value="省内游"></el-option>
                <el-option label="境外游" value="境外游"></el-option>
                <el-option label="国内游" value="国内游"></el-option>
                <el-option label="日韩游" value="日韩游"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="合同状态：">
              <el-input v-model="chioceForm.cstate" placeholder="合同状态"></el-input>
            </el-form-item>
            <el-form-item label="出发城市：">
              <el-input v-model="chioceForm.farcity" placeholder="出发城市"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker v-model="chioceForm.dateRange" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        <div class="cncn-main-con nobgcolor">
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column fixed='left' prop="id" label="ID" min-width="80"></el-table-column>
            <el-table-column prop="num" label="合同编号" min-width="180"></el-table-column>
            <el-table-column prop="store" label="签约门店" min-width="180"></el-table-column>
            <el-table-column prop="name" label="甲方代表" min-width="150"></el-table-column>
            <el-table-column prop="teamnum" label="参团人数" min-width="100"></el-table-column>
            <el-table-column prop="linetype" label="线路类型" min-width="100"></el-table-column>
            <el-table-column prop="linename" label="线路名称" min-width="180"></el-table-column>
            <el-table-column prop="farcity" label="出发城市" min-width="100"></el-table-column>
            <el-table-column fixed="right" label="操作" min-width="150">
              <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">上架</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next" :total="total" :page-size='pageSize' @current-change="getCurrentData"></el-pagination>
        </div>
      </div>
      <cncn-footer></cncn-footer>
    </div>
  </div>
</template>
<script>
import CncnFooter from '@/components/CncnFooter'
export default {
  name: 'contractmanage',
  data () {
    return {
      chioceForm: {
        present: '',
        linename: '',
        linetype: '',
        cstate: '',
        farcity: '',
        dateRange: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      total: 60,
      pageSize: 12,
      tableData: [{
        id: '1',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '2',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '3',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '4',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '5',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '6',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '7',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '8',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '9',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }, {
        id: '10',
        store: '湖里万达店',
        num: '123G17032100006',
        name: '詹姆斯',
        teamnum: '1000',
        linetype: '境内游',
        linename: '厦门-泉州一日游',
        farcity: '厦门'
      }]
    }
  },
  components: {
    CncnFooter
  },
  methods: {
    getCurrentData (currentPage) {
      console.log(currentPage)
      // getCurrentData
    },
    handleClick () {
      this.$confirm('确定要上架吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '上架成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消上架'
        })
      })
    }
  }
}
</script>
<style lang="stylus">
  .chioceForm
    text-align left
</style>
