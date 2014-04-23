# DocPad Configuration File
# http://docpad.org/docs/config

moment = require 'moment'

moment.lang('ro');

# Define the DocPad Configuration
docpadConfig = {

	localeCode: 'ro',

	templateData:
		site:
			title: "dumitru.me"
			version: '0.1.2'
			host: 'dumitru.me'
			motto: 'Coding din plăcere'
			url: 'http://dumitru.me'
			feed: 'http://feeds.feedburner.com/dumitru'

		getCanonical: -> if @document.url then "#{@site.url}#{@document.url}" else "#{@site.url}/"

		getTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

		moment: moment

		sections:
			all: -> [{name:"Proiecte",slug:"projects"},{name:"Blog",slug:"blog"}]

			get: (slug)->
				arr = this.all()
				for s in arr
					if s.slug == slug
						return s
				return null

			inSection: (slug, url)->
				if slug == 'blog'
					url.indexOf("/" + slug) == 0 or url.indexOf('/tags/') > -1
				else url.indexOf("/" + slug) == 0

		db: (collection) ->
			blog:
				posts: ->
					collection.findAllLive({relativeOutDirPath: /blog/, isPost:true},[{date:-1}]).toJSON()

				#postsByTag: (tag)->
				#    collection.findAllLive({relativeOutDirPath: 'blog', isPost:true},[{date:-1}]).toJSON()

				latest: (count = 10) ->
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
									slug = tag.replace(' ', '-', 'g').replace('.', '-', 'g').replace('C#', 'c-sharp', 'g').toLowerCase()
									slug = 'dot-net' if slug == '-net'
									t = {slug: slug, name: tag, count: 1, url: "/tags/#{slug}.html"}

									if exists(t.slug)
										increment t
									else
										tags.push t
										dic.push t.slug
						tags

					tag: (slug) ->
						tags = this.list()
						for tag in tags
							if tag.slug == slug
								tag
						null

	plugins:
		rss:
			collection: 'blog'
			url: '/rss.xml' # optional, this is the default
		tags:
			extension: '.html.eco'
			relativeDirPath: 'tags'
			injectDocumentHelper: (document) ->
				document.setMeta(layout: 'tag')


	collections:
		# For instance, this one will fetch in all documents that have pageOrder set within their meta data
		pages: ->
			@getCollection('documents').findAllLive({pageOrder: $exists: true}, [pageOrder: 1, title: 1])

		# This one, will fetch in all documents that have the tag "post" specified in their meta data
		projects: ->
			@getCollection('documents').findAllLive({relativeOutDirPath: /projects/, isProject: true}, [date:-1])

		# This one, will fetch in all documents that have the tag "post" specified in their meta data
		blog: ->
			@getCollection('documents').findAllLive({relativeOutDirPath: /blog/, isPost: true}, [{date:-1}])
		#database.findAllLive({relativeOutDirPath: 'blog'},[date:-1])

}

# Export the DocPad Configuration
module.exports = docpadConfig