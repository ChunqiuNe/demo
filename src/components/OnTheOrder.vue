<template>
  <div>
    <el-table :data='tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)'  @row-click="handdle"  highlight-current-row style='width: 100%'>
      <el-table-column
        prop='id'
        label='ID'
        width='180'
        fixed = 'left'
        align="center">
      </el-table-column>
      <el-table-column
        prop='userName'
        label='用户'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='email'
        label='邮箱'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='addDate'
        label='注册日期'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='sex'
        label='性别'
        width='180'
        align="center"
        :formatter="formatSex">
      </el-table-column>
      <el-table-column
      prop='userName'
      label='用户'
      width='180'
      align="center">
     </el-table-column>
      <el-table-column
      prop='userName'
      label='用户'
      width='180'
      align="center">
    </el-table-column>
      <el-table-column
        prop='userName'
        label='用户'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='userName'
        label='用户'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='userName'
        label='用户'
        width='180'
        align="center">
      </el-table-column>      <el-table-column
      prop='userName'
      label='用户'
      width='180'
      align="center">
    </el-table-column>   <el-table-column
      prop='userName'
      label='用户'
      width='180'
      align="center">
    </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class='block' style='margin-top:15px;'>
      <el-pagination align='center' @size-change='handleSizeChange' @current-change='handleCurrentChange'
                     :current-page='currentPage' :page-sizes='[5]' :page-size='pageSize'
                     layout='total, sizes, prev, pager, next, jumper' :total='tableData.length'>
      </el-pagination>
    </div>
    <div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList1"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip"  >只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数5
      fileList1: [
      ]
    }
  },
  methods: {
    formatSex: function (row, column, cellValue) {
      if (cellValue === '0') {
        return '女'
      } else if (cellValue === '1') {
        return '男'
      }
    },
    handleClick() {
      window.open('http://127.0.0.1:8081/down/dowload')
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
      debugger
      alert(1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.currentRow = val
    },
    // 弹出点击行

    handdle(row, event, column) {
      let adc = this
      debugger
      this.axios.get('/api/select/selectUserByAll', this.qs.stringify(), {
        headers: {
          'content-type': 'Access-Control-Allow-Origin:*'
        }
      }).then(function (res) {
        debugger
        // 测试
        // alert(res.data.data.content[0].userName)
        adc.$message({
          message: '请求成功',
          type: 'success'
        })
      }).catch(
        function () {
          adc.$message.error('请求失败~！')
        })
    }
  },
  // 1请求后台数据时使用
  mounted () {
    let adc = this
    adc.axios.get('/api/select/selectUserByAll', this.qs.stringify(), {
      headers: {
        'content-type': 'Access-Control-Allow-Origin:*'
      }
    }).then(function (res) {
      debugger
      // 测试
      // alert(res.data.data.content[0].userName)
      adc.tableData = res.data.data.content
      adc.$message({
        message: '请求成功',
        type: 'success'
      })
    }).catch(
      function () {
        adc.$message.error('请求失败~！')
      })
  }

}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
</style>
