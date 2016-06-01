class GiantbombService
  def games(query)
    @resp = Faraday.get 'http://www.giantbomb.com/api/search/' do |req|
      req.params['api_key'] = ENV['API_KEY']
      req.params['format'] = "json"
      req.params['query'] = query
      req.params['resources'] = "game"
      #should add developers to list
      req.params['field_list'] = "api_detail_url,id,name,image,platforms,deck,original_release_date,expected_release_year"
    end
    @result = JSON.parse(@resp.body)
  end

  def game(url)
    @resp = Faraday.get "http://www.giantbomb.com/api/game/#{url}/" do |req|
      req.params['api_key'] = ENV['API_KEY']
      req.params['format'] = "json"
      req.params['resources'] = "game"
      req.params['field_list'] = "id,name,image,platforms,description,original_release_date,expected_release_year"
    end
    @result = JSON.parse(@resp.body)
  end
end
