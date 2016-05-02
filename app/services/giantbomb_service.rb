class GiantbombService
  def games(query)
    @resp = Faraday.get 'https://www.giantbomb.com/api/search/' do |req|
      req.params['client_id'] = ENV['API_KEY']
      req.params['format'] = "json"
      req.params['query'] = query
      req.params['resources'] = "game"
      req.params['field_list'] = "id,name,image,platforms,deck,original_release_date,expected_release_year"
    end
    @result = JSON.parse(@resp.body)
  end