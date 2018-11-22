## DW.CATG_ORGANIC_WSTG_FCT(有机生活馆品类损耗表)

### 实体定义

| col_name | data_type | comment |
|:----:| --------------------- | ----------------- |
|calday |string | |
|shop_id|string||
|old_shop_id|string||
|catg_s_id|string||
|catg_s_name|string||
|goods_uid|string||
|goodsid|string||
|goodsname|string||
|wstg_qty|decimal(30,8)||
|wstg_amt|decimal(30,8)||
|wstg_sheet_num|bigint||
|wstg_type|string||
|place_id|string||
|project_block_id|string||
|project_block_name|string||
|update_time|string||
|sdt|string|主分区-日期|
|#|Partition|Information|
|#|col_name|data_type|
|sdt|string|主分区-日期|

### 元数据
- Database            	:dw
- Owner               	:suying
- CreateTime          	:Tue Mar 06 11 45 40 CST 2018
- LastAccessTime      	:UNKNOWN
- Protect Mode        	:None
- Retention           	:0
- Location            	:hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct
- Table Type          	:EXTERNAL_TABLE
- Table Parameters
	> EXTERNAL            	:TRUE
	> comment             	:有机生活馆品类损耗表
	> transient_lastDdlTim	:1520307940
	>
- SerDe Library       	:org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
- InputFormat         	:org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
- OutputFormat        	:org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
- Compressed          	:No
- Num Buckets         	:-1
- Bucket Columns      	:[]
- Sort Columns        	:[]
	> serialization.forma	:1

### 存量数据
- **数据存量**: /warehouse/dw/catg/catg_organic_wstg_fct/sdt=20170101 ~ 20180426 
- **周期数据增量**:  377.613 KB
- **近30日平均记录数**: 
- **文件统计**
> 统计日期: 2018-04-27 11:54:44.286005055 星期五
>  /warehouse/dw/catg/catg_organic_wstg_fct ----TotalSize: 176.268 MB ,目录: 478

- impala分区统计:

| sdt      | #Rows   | #Files | Size     | Bytes Cached | Cache Replication | Format  | Incremental stats | Location                                                                 |
|----------|---------:|--------:|----------|--------------|-------------------|---------|-------------------|--------------------------------------------------------------------------|
| 20180418 | 512     | 1      | 49.36KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180418 |
| 20180419 | 518     | 1      | 48.38KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180419 |
| 20180421 | 517     | 1      | 49.51KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180421 |
| 20180422 | 554     | 1      | 52.77KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180422 |
| 20180424 | 434     | 1      | 41.75KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180424 |
| 20180425 | 633     | 1      | 56.91KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180425 |
| 20180426 | 666     | 1      | 55.37KB  | NOT CACHED   | NOT CACHED        | PARQUET | false             | hdfs://nameservice1/warehouse/dw/catg/catg_organic_wstg_fct/sdt=20180426 |
| Total    | -1      | 479    | 176.27MB | 0B           |                   |         |                   |                                                                          |

### ETL

- 主题: CATG

### 数据口径
#### 数据字典
RP处理方式
- R:退货
- P:促销

#### 常用统计
```sql
hive>--统计促销销售
hive>SELECT STATEMENT;
hive>
```

#### 参照完整性约束
1. SHOP_ID - DIM.DIM_SHOP.SHOP_ID (FK)
2. GOODSID - DIM.DIM_GOODS.GOODSID (FK)
