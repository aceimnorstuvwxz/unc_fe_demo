page_config =
{
  "layout":
  [
    {
      "type":"text",
      "title":"name",
      "dataTarget":"dt0.source.name",
      "formId":"user_name"
    },
    {
      "type":"text",
      "title":"age",
      "dataTarget":"dt0.source.age",
      "formId":"user_age"
    }
  ],

  "dataSource":
  [
    {
      "dataSourceName":"dt0",
      "address":"the request url to fetch the datasource"
    },
    {
      "dataSourceName":"dt1",
      "address":"the request url to fetch the datasource2"
    }
  ]
}

function PageConfigTest()
{
  alert(page_config.dataSource[0].address);

}
