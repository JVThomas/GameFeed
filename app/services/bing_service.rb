class BingService
  def get_news(title)
    @resp = Faraday.get 'https://api.datamarket.azure.com/Bing/Search/v1/Composite' do |req|
      req.params["Sources"] = "'news'"
      req.params["Query"] = "'" + "#{title}" + "'"
      req.params['$format'] = 'json'
      req.headers['Authorization'] = 'Basic ' + "#{ENV['BING_BASE64']}"
    end
    @result = JSON.parse(@resp.body)
  end
end