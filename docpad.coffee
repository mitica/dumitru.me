# DocPad Configuration File
# http://docpad.org/docs/config

_ = require 'underscore'


# Define the DocPad Configuration
docpadConfig = {
    
    localeCode: 'ro',

	templateData:
        site:
            title: "Dumitru"
            version: 0.1

        getTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

        sections:
        	all: -> [{name:"Proiecte",slug:"projects"},{name:"Blog",slug:"blog"}]

        	get: (slug)->
        		arr = this.all()
        		for s in arr
        			if s.slug == slug
        				return s
        		return null

        	inSection: (slug, url)-> url.indexOf("/" + slug)==0
        db: (collection) ->
        	blog:
        		posts: ->
        			collection.findAllLive({relativeOutDirPath: 'blog', isPost:true},[{date:-1}]).toJSON()

        		latest: (count=10) ->
        			this.posts()[0...count]

        		post: (url)->
        			for post in this.posts()
        				if post.url==url
        					return post
        			return null

        		next: (url)->
        			posts = this.posts()
        			for i in [0...posts.length]
        				post = posts[i]
        				if post.url == url && i < posts.length-1
        					return posts[i+1]
        			return null

        		prev: (url)->
        			posts = this.posts()
        			for i in [0...posts.length]
        				post = posts[i]
        				if post.url == url && i > 0
        					return posts[i-1]
        			return null

        		tags: (posts) ->
        			list: ->
        				dic=[]
	        			tags=[]
        				increment = (t) ->
        					for tag in tags
        						if tag.slug == t.slug
        							tag.count++
        							break

        				exists = (slug) ->
        					for k in dic
        						if k == slug
        							return true
        					return false

	        			for post in posts
	        				if post.tags && post.tags.length > 0
	        					for tag in post.tags
	        						tag = tag.trim()
	        						t = {slug: tag.replace(' ', '-', 'g').toLowerCase(), name: tag, count: 1}
	        						if exists(t.slug)
	        							increment(t)
	        							continue
	        						else
	        							dic.push(t.slug)
	        							tags.push(t)
	        			return tags

	        		tag: (slug) ->
	        			tags = this.list()
	        			for tag in tags
	        				if tag.slug == slug
	        					tag
	        			null

    collections:
    	# For instance, this one will fetch in all documents that have pageOrder set within their meta data
    	pages: ->
    		@getCollection('html').findAllLive({pageOrder: $exists: true}, [pageOrder: 1, title: 1])

		# This one, will fetch in all documents that have the tag "post" specified in their meta data
		projects: ->
			@getCollection('html').findAllLive({relativeOutDirPath: 'projects'},[date:-1])

		# This one, will fetch in all documents that have the tag "post" specified in their meta data
		posts: ->
			@getCollection('html').findAll({relativeOutDirPath: 'blog'},[{date:-1}])
		#database.findAllLive({relativeOutDirPath: 'blog'},[date:-1])

}

# Export the DocPad Configuration
module.exports = docpadConfig